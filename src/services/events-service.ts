import { conflictError, unauthorizedError } from "../errors";
import { JoinDashboardsInput } from "../protocols";
import { getComputeInstancesEventsRepository, getIdentityEventsRepository, getJoinComputeInstancesEventsRepository, getJoinIdentityEventsRepository, getJoinNetworkEventsRepository, getNetworkEventsRepository } from "../repositories";
import { getUserDetails } from "./user-service";

export async function getEventsService(userToken: string, type: string) {
    console.log("entrei no service");
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (type !== 'compute' && type !== 'identity' && type !== 'network') {
        throw unauthorizedError("Rota inexistente");
    }
    console.log(userDetails);
    if (userDetails[0].isAdmin){
        if (type === 'compute'){
            const response = await getComputeInstancesEventsRepository();
            return response;
        }
        if (type === 'identity'){
            const response = await getIdentityEventsRepository();
            return response;
        }
        if (type === 'network'){
            const response = await getNetworkEventsRepository();
            return response;
        }        
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        if (type === 'compute'){
            const response = await getJoinComputeInstancesEventsRepository(tenancies);
            return response;
        }
        if (type === 'identity'){
            const response = await getJoinIdentityEventsRepository(tenancies);
            return response;
        }
        if (type === 'network'){
            const response = await getJoinNetworkEventsRepository(tenancies);
            return response;
        }         
    }
    
}

export async function getJoinEventsService(userToken: string, body: JoinDashboardsInput, type: string) {
    if (type !== 'compute' && type !== 'identity' && type !== 'network') {
        throw unauthorizedError("Rota inexistente");
    }
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    const userTenancies = userDetails.map(user => user.tenancy.toLowerCase());
    const tenancies = [body.tenancy1?.toLowerCase(), body.tenancy2?.toLowerCase(), body.tenancy3?.toLowerCase()].filter(Boolean);

    
    // Verifica se todas as chaves de filteredTenancies estão incluídas em tenancies
    const isValid = tenancies.every(key => userTenancies.includes(key));
    if (userDetails[0].isAdmin) {
        if (type === 'compute'){
            const response = await getComputeInstancesEventsRepository();
            return response;
        }
        if (type === 'identity'){
            const response = await getIdentityEventsRepository();
            return response;
        }
        if (type === 'network'){
            const response = await getNetworkEventsRepository();
            return response;
        }
    }
    
    if (!isValid) {
        throw conflictError("Você não tem acesso às tenancies desejadas");
    } else {
        if (type === 'compute'){
            const response = await getJoinComputeInstancesEventsRepository(tenancies);
            return response;
        }
        if (type === 'identity'){
            const response = await getJoinIdentityEventsRepository(tenancies);
            return response;
        }
        if (type === 'network'){
            const response = await getJoinNetworkEventsRepository(tenancies);
            return response;
        }    
    }
}
