import { unauthorizedError } from "../errors";
import { JoinDashboardsInput } from "../protocols";
import { getLatestMemoryByTenancyRepository, getLatestMemoryRepository } from "../repositories";
import { getUserDetails } from "./user-service";

export async function getLatestMemoryService(userToken: string) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getLatestMemoryRepository();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getLatestMemoryByTenancyRepository(tenancies);
        return response;
    }
    
}

export async function getJoinLatestMemoryService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (!userDetails[0].isAdmin){
        throw unauthorizedError("Apenas administradores podem acessar essa rota");
    }
    const filteredTenancies = Object.fromEntries(
        Object.entries(body).filter(([key, value]) => value !== null)
    );
    const tenancies = Object.values(filteredTenancies);
    const response = await getLatestMemoryByTenancyRepository(tenancies);
    return response;
}