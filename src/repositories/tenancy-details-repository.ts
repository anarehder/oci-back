import { prisma2 } from "../config/database";

export async function getTenanciesListRepository(){
    const tenanciesList = await prisma2.tenancyDetails.findMany();

    return tenanciesList;
}