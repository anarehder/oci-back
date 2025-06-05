import { conflictError, unauthorizedError } from "../errors";
import { JoinDashboardsInput } from "../protocols";
import { get30MinAverageMemoryByTenancyRepository, get30MinAverageMemoryRepository } from "../repositories";
import { getUserDetails } from "./user-service";

export async function getLatestMemoryService(userToken: string) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await get30MinAverageMemoryRepository();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await get30MinAverageMemoryByTenancyRepository(tenancies);
        return response;
    }
    
}

export async function getJoinLatestMemoryService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    const userTenancies = userDetails.map(user => user.tenancy.toLowerCase());
    const tenancies = [body.tenancy1?.toLowerCase(), body.tenancy2?.toLowerCase(), body.tenancy3?.toLowerCase()].filter(Boolean);

    if (userDetails[0].isAdmin) {
        const response = await get30MinAverageMemoryByTenancyRepository(tenancies);
        return response;
    }
    // Verifica se todas as chaves de filteredTenancies estão incluídas em tenancies
    const isValid = tenancies.every(key => userTenancies.includes(key));

    if (!isValid) {
        throw conflictError("Você não tem acesso às tenancies desejadas");
    } else {
        const response = await get30MinAverageMemoryByTenancyRepository(tenancies);
        return response;
    }

}