import { prisma1, prisma2 } from "../config/database";

export async function getTenanciesListRepository(){
    const tenanciesList = await prisma2.tenancyDetails.findMany({
      orderBy: {
        tenancy_name: 'asc',
      },
      where: {
        time_end: {
          gte: new Date(),
        }
      }
    });

    return tenanciesList;
}

export async function getClientsTenanciesListRepository(){
    const tenanciesList = await prisma1.clients.findMany({
      orderBy: {
        Tenancy: 'asc',
      },
      where:{
        Active: true,
      }
    });

    return tenanciesList;
}