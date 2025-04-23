import { getUserDetails } from "./user-service";
import { getAuditRepository, getAuditByTenancyRepository } from "../repositories";
import { JoinDashboardsInput } from "../protocols";
import { conflictError, unauthorizedError } from "../errors";

export async function getAuditsService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if(userDetails.length === 0){
        throw conflictError("Não foi possível localizar o usuário para buscar a tenancy");
    }
    const date = last2Day();

    if (userDetails[0].isAdmin){
        const response = await getAuditRepository(date);
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getAuditByTenancyRepository(tenancies, date);
        return response;
    }
    
}

export async function getJoinAuditsService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (!userDetails[0].isAdmin){
        throw unauthorizedError("Apenas administradores podem acessar essa rota");
    }
    const filteredTenancies = Object.fromEntries(
        Object.entries(body).filter(([key, value]) => value !== null)
    );
    const date = last2Day(); 
    const tenancies = Object.values(filteredTenancies);
    const response = await getAuditByTenancyRepository(tenancies, date);
    return response;
}

export function last7Day() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); 
    return sevenDaysAgo;
}

export function last2Day() {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2); 
    return twoDaysAgo;
}