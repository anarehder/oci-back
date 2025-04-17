import { Top5VMCost } from "../protocols";
import { prisma2 } from "../config/database";

export async function getComputeInstancesRepository(){
    const computeInstances = await prisma2.computeInstances.findMany();

    return computeInstances;
}

export async function getComputeInstancesByTenancyRepository(tenancies: string[]){
    const computeInstances = await prisma2.computeInstances.findMany({
        where: {
          tenancy_name: {
            in: tenancies,
          },
        },
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
            hourly_cost: true,
        },
        orderBy: {
          hourly_cost: 'desc', // 'asc' para crescente, 'desc' para decrescente
        },
        take: 5,
    });

    const computedInstancesWithDailyCost: Top5VMCost[] = computeInstances
        .map(instance => ({
            ...instance,
            dailyCost: instance.hourly_cost * 24 * 30.5,
        }))
        .slice(0, 5); // Limita a 5 maiores

    return computedInstancesWithDailyCost;
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
            hourly_cost: true,
        },
        orderBy: {
          hourly_cost: 'desc', // 'asc' para crescente, 'desc' para decrescente
        },
        take: 5,
    });

    const computedInstancesWithDailyCost: Top5VMCost[] = computeInstances
        .map(instance => ({
            ...instance,
            dailyCost: instance.hourly_cost * 24 * 30.5,
        }))
        .slice(0, 5); // Limita a 5 maiores

    return computedInstancesWithDailyCost;
}