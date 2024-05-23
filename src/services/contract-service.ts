import { conflictError } from "../errors";
import { getClientsListRespository, getContractsByTenancyRespository, getContractsRespository, getUserDetailsByTokenRepository } from "../repositories";

export async function getContractsService(userToken: string) {
    const token = userToken.slice(7);

    const userDetails = await getUserDetailsByTokenRepository(token);

    if (userDetails.isAdmin === 1 && userDetails.tenancy === "ACCERTETECNOLOGIA"){
        const response = await getContractsRespository();
        return response;
    } else {
        const response = await getContractsByTenancyRespository(userDetails.tenancy);
        return response;
    }
    
}

export async function getClientsListService(userToken: string) {
    const token = userToken.slice(7);

    const userDetails = await getUserDetailsByTokenRepository(token);

    if (userDetails.isAdmin === 1 && userDetails.tenancy === "ACCERTETECNOLOGIA"){
        const response = await getClientsListRespository();
        return response;
    } else {
        throw conflictError("This user cant use this route");
    }
    
}