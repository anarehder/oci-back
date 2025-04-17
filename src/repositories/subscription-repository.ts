import { prisma2 } from "../config/database";
import { CreditsOCI } from "../protocols";

export async function getSubscriptionAmountByTenancyRepository(tenancies: string[]) {
    const placeholders = tenancies.map(() => '?').join(', '); // ?, ?, ?

    const response: CreditsOCI[] = await prisma2.$queryRaw`
        SELECT
            tenancy_name AS "NOME TENANCY",
            line_net_amount AS "TOTAL CREDITO",
            used_amount AS "QUANTI. USADA",
            available_amount AS "QUANTI. DISPONIVEL",
            (used_amount/line_net_amount) * 100 AS "PERCENT. USADO",
            (dias_decorridos/total_dias_contrato) * 100 AS "PERCENT. DIAS DECORRIDOS"
        FROM SubscriptionDetails
        WHERE tenancy_name IN (${placeholders})
        ORDER BY (used_amount/line_net_amount) DESC;
        `;

    return response;

}

export async function getAllTenanciesSubscriptionAmountRepository(){
    const response: CreditsOCI[] = await prisma2.$queryRaw`
        SELECT
            tenancy_name,
            line_net_amount,
            used_amount,
            available_amount,
            (used_amount/line_net_amount) * 100 AS used_percentage,
            (dias_decorridos/total_dias_contrato) * 100 AS date_percentage
        FROM SubscriptionDetails
        ORDER BY (used_amount/line_net_amount) DESC;
        `;

    return response;
}
