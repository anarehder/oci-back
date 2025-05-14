import { prisma2 } from "../config/database";

export async function getComputeInstancesRepository(){
    const computeInstances = await prisma2.computeInstances.findMany({
      orderBy: {
        display_name: 'asc',
      },
    });

    return computeInstances;
}

export async function getComputeInstancesByTenancyRepository(tenancies: string[]){
    const computeInstances = await prisma2.computeInstances.findMany({
        where: {
          tenancy_name: {
            in: tenancies,
          },
        },
        orderBy: {
          display_name: 'asc',
        },
      });

    return computeInstances;
}
export async function getComputeInstancesByDisplayNameRepository(displayName: string) {
  const computeInstances = await prisma2.computeInstances.findFirst({
    where: {
      display_name: displayName,
    }
  });

  return computeInstances;
}

export async function getTop5CostComputeInstancesRepository(){
    const computeInstances = await prisma2.computeInstances.findMany({
        select: {
            tenancy_name: true,
            display_name: true,
            id: true,
            lifecycle_state: true,
            monthly_cost: true,
        },
        orderBy: {
          monthly_cost: 'desc', // 'asc' para crescente, 'desc' para decrescente
        },
        take: 5,
    });

    return computeInstances;
}


  export async function getTop5CostComputeInstancesByTenancyRepository(tenancyNames: string[]){
    const computeInstances = await prisma2.computeInstances.findMany({
        where: {
            tenancy_name: {
              in: tenancyNames,
            },
          },
        select: {
            tenancy_name: true,
            display_name: true,
            id: true,
            lifecycle_state: true,
            monthly_cost: true,
        },
        orderBy: {
          monthly_cost: 'desc', // 'asc' para crescente, 'desc' para decrescente
        },
        take: 5,
    });

    return computeInstances;
}
