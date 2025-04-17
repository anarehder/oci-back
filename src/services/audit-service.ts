import { getUserDetails } from "./user-service";
import { getAuditRepository, getAuditByTenancyRepository } from "../repositories";

export async function getAuditsService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getAuditRepository();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getAuditByTenancyRepository(tenancies);
        return response;
    }
    
}