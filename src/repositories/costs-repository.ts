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

export async function getMonthServiceCostsByTenancyRepository(tenancies: string[], month: string) {
  const startOfMonth = new Date(`${month}-01T00:00:00.000Z`);
  const startOfNextMonth = new Date(new Date(startOfMonth).setMonth(startOfMonth.getMonth() + 1));
  const monthServicesCost = await prisma2.custoPorService.findMany({
      where: {
        tenancy_name: {
          in: tenancies,
        },
        time_started: {
          gte: startOfMonth,
          lt: startOfNextMonth,
        }
      },
      orderBy: {
        cost_mes: 'desc',
      },
  });

  return monthServicesCost;
}

export async function getMonthSKUCostsByTenancyRepository(tenancies: string[], month: string) {
  const startOfMonth = new Date(`${month}-01T00:00:00.000Z`);
  const startOfNextMonth = new Date(new Date(startOfMonth).setMonth(startOfMonth.getMonth() + 1));
  const monthSKUCost = await prisma2.custoPorSkuName.findMany({
      where: {
        tenancy_name: {
          in: tenancies,
        },
        time_started: {
          gte: startOfMonth,
          lt: startOfNextMonth,
        }
      },
      orderBy: {
        cost_mes: 'desc',
      },
  });

  return monthSKUCost;
}

export async function getMonthDailyCostsRepository(tenancies: string[], startOfMonth: string) {
  const monthDailyCosts = await prisma2.custoDiarioTotal.findMany({
      where: {
        tenancy_name: {
          in: tenancies,
        },
        time_started: {
          gte: startOfMonth,
        }
      },
      orderBy: {
        time_started: 'asc',
      },
  });

  return monthDailyCosts;
}