import { prisma2 } from "../config/database";

export async function getAuditRepository(){
    const computeInstances = await prisma2.audit.findMany();

    return computeInstances;
}

export async function getAuditByTenancyRepository(tenancies: string[]){
    const computeInstances = await prisma2.audit.findMany({
        where: {
          tenancy_name: {
            in: tenancies,
          },
        },
        take: 50,
      });

    return computeInstances;
}