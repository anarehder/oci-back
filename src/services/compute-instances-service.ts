import { JoinDashboardsInput } from "../protocols";
import { unauthorizedError } from "../errors";
import { getUserDetails } from "./user-service";
import { getComputeInstancesByTenancyRepository, getComputeInstancesRepository } from "../repositories";

export async function getComputeInstancesService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getComputeInstancesRepository();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getComputeInstancesByTenancyRepository(tenancies);
        return response;
    }
    
}

export async function getJoinComputeInstancesService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (!userDetails[0].isAdmin){
        throw unauthorizedError("Apenas administradores podem acessar essa rota");
    }
    const filteredTenancies = Object.fromEntries(
        Object.entries(body).filter(([key, value]) => value !== null)
    );
    const tenancies = Object.values(filteredTenancies);
    const response = await getComputeInstancesByTenancyRepository(tenancies);
    return response;
}