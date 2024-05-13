import { getContractsByTenancyRespository, getContractsRespository, getUserDetailsByTokenRepository } from "../repositories";

export async function getContractsService(userToken: string) {
    const token = userToken.slice(7);
    console.log(token);
    const userDetails = await getUserDetailsByTokenRepository(token);
    console.log(userDetails);
    if (userDetails.isAdmin === 1 && userDetails.tenancy === "ACCERTETECNOLOGIA"){
        const response = await getContractsRespository();
        return response;
    } else {
        const response = await getContractsByTenancyRespository(userDetails.tenancy);
        return response;
    }
    
}