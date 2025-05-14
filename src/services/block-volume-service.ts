import { conflictError, unauthorizedError } from "../errors";
import { JoinDashboardsInput } from "../protocols";
import { getBlockVolumeListRepository, getBlockVolumesByTenancyRepository } from "../repositories/block-volume-repository";
import { getUserDetails } from "./user-service";

export async function getBlockVolumeService(userToken: string) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token); //cliente com tenancy
    if (userDetails[0].isAdmin){
        const response = await getBlockVolumeListRepository();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getBlockVolumesByTenancyRepository(tenancies);
        return response;
    }
    
}

export async function getJoinBlockVolumeService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    const userTenancies = userDetails.map(user => user.tenancy.toLowerCase());
    const tenancies = [body.tenancy1?.toLowerCase(), body.tenancy2?.toLowerCase(), body.tenancy3?.toLowerCase()].filter(Boolean);
    
    if (userDetails[0].isAdmin) {
        const response = await getBlockVolumesByTenancyRepository(tenancies);
        return response;
    }
    // Verifica se todas as chaves de filteredTenancies estão incluídas em tenancies
    const isValid = tenancies.every(key => userTenancies.includes(key));

    if (!isValid) {
        throw conflictError("Você não tem acesso às tenancies desejadas");
    } else {
        const response = await getBlockVolumesByTenancyRepository(tenancies);
        return response;
    }
}