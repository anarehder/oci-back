import { JoinDashboardsInput } from "../protocols";
import { conflictError } from "../errors";
import { getUserDetails } from "./user-service";
import { getComputeInstancesByTenancyRepository, getComputeInstancesRepository } from "../repositories";

export async function getComputeInstancesService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getComputeInstancesRepository();
        return response;
    } else {
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getComputeInstancesByTenancyRepository(tenancies);
        return response;
    }

}

export async function getJoinComputeInstancesService(userToken: string, body: JoinDashboardsInput) {

    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    const userTenancies = userDetails.map(user => user.tenancy.toLowerCase());
    const tenancies = [body.tenancy1?.toLowerCase(), body.tenancy2?.toLowerCase(), body.tenancy3?.toLowerCase()].filter(Boolean);

    
    // Verifica se todas as chaves de filteredTenancies estão incluídas em tenancies
    const isValid = tenancies.every(key => userTenancies.includes(key));
    if (userDetails[0].isAdmin) {
        const response = await getComputeInstancesByTenancyRepository(tenancies);
        return response;
    }
    
    if (!isValid) {
        throw conflictError("Você não tem acesso às tenancies desejadas");
    } else {
        const response = await getComputeInstancesByTenancyRepository(tenancies);
        return response;
    }
}