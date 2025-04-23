import { prisma2 } from "../config/database";

export async function getAuditRepository(sevenDaysAgo: Date) {
    const audits = await prisma2.audit.findMany({
      where: {
        event_time: {
          gte: sevenDaysAgo,
        },
      },
      take: 50,
      orderBy: {
        event_time: 'desc', // ou 'desc' para ordem decrescente
      },
    });

    return audits;
}

export async function getAuditByTenancyRepository(tenancies: string[], sevenDaysAgo: Date){
    const audits = await prisma2.audit.findMany({
      where: {
        AND: [
          {
            tenancy_name: {
              in: tenancies,
            },
          },
          {
            event_time: {
              gte: sevenDaysAgo,
            },
          },
        ],
      },
      take: 50,
      orderBy: {
        event_time: 'desc', // ou 'desc' para ordem decrescente
      },
    });

    return audits;
}