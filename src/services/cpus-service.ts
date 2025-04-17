import { unauthorizedError } from "../errors";
import { JoinDashboardsInput } from "../protocols";
import { getLatestCpusByTenancyRepository, getLatestCpusRepository } from "../repositories";
import { getUserDetails } from "./user-service";

export async function getLatestCpusService(userToken: string) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getLatestCpusRepository();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getLatestCpusByTenancyRepository(tenancies);
        return response;
    }
    
}

export async function getJoinLatestCpusService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (!userDetails[0].isAdmin){
        throw unauthorizedError("Apenas administradores podem acessar essa rota");
    }
    const tenancies = Object.values(body);
    const response = await getLatestCpusByTenancyRepository(tenancies);
    return response;
}