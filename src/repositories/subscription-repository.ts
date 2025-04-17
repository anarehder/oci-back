import { prisma2 } from "../config/database";
import { CreditsOCI } from "../protocols";

export async function getSubscriptionAmountByTenancyRepository(tenancies: string[]) {
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const response = await prisma2.subscriptionDetails.findMany({
        where: {
          tenancy_name: {
            in: tenancies, // substitua pelo seu array de nomes
          },
        },
        orderBy: {
          used_amount: 'desc',
        },
        select: {
          tenancy_name: true,
          line_net_amount: true,
          used_amount: true,
          available_amount: true,
          dias_decorridos: true,
          total_dias_contrato: true
        },
    });

    const mappedResponse = response.map(item => {
    const used_percentage = (item.used_amount / item.line_net_amount) * 100;
    const date_percentage = (item.dias_decorridos / item.total_dias_contrato) * 100;
        return {
            ...item,
            used_percentage,
            date_percentage,
        };
    });
    return mappedResponse;
}

export async function getAllTenanciesSubscriptionAmountRepository(){
    const response = await prisma2.subscriptionDetails.findMany({
        orderBy: {
          used_amount: 'desc',
        },
        select: {
          tenancy_name: true,
          line_net_amount: true,
          used_amount: true,
          available_amount: true,
          dias_decorridos: true,
          total_dias_contrato: true
        },
    });

    const mappedResponse = response.map(item => {
    const used_percentage = (item.used_amount / item.line_net_amount) * 100;
    const date_percentage = (item.dias_decorridos / item.total_dias_contrato) * 100;
        return {
            ...item,
            used_percentage,
            date_percentage,
        };
    });
    return mappedResponse;
}
