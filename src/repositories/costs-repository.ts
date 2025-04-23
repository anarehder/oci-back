import { prisma2 } from "../config/database";
import { MonthCost } from "../protocols";

export async function getAllMonthCosts() {
    const costs: MonthCost[] = await prisma2.$queryRaw`
        SELECT
          tenancy_name,
          DATE_FORMAT(time_started, '%Y-%m') AS mes,
          ROUND(SUM(cost_mes), 2) AS cost_mes,
          ROUND(SUM(usage_mes), 2) AS usage_mes
        FROM
          CustoMensalTotal
        WHERE
          DATE_FORMAT(time_started, '%d') = '01'
          AND DATE_FORMAT(time_ended, '%d') = '01'
          AND usage_mes IS NOT NULL
        GROUP BY
          tenancy_name,
          mes
        ORDER BY
          tenancy_name,
          mes asc
      ;`;

    return costs;

}

export async function getMonthCostsByTenancyRepository(tenancies: string[]){
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const costs: MonthCost[] = await prisma2.$queryRawUnsafe(`
        SELECT
          tenancy_name,
          DATE_FORMAT(time_started, '%Y-%m') AS mes,
          ROUND(SUM(cost_mes), 2) AS cost_mes,
          ROUND(SUM(usage_mes), 2) AS usage_mes
        FROM
          CustoMensalTotal
        WHERE
          DATE_FORMAT(time_started, '%d') = '01'
          AND DATE_FORMAT(time_ended, '%d') = '01'
          AND usage_mes IS NOT NULL
          AND tenancy_name IN (${placeholders})
        GROUP BY
          tenancy_name,
          mes
        ORDER BY
          tenancy_name,
          mes asc
    ;`);

    return costs;
}
