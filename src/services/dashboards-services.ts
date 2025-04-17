import { DashboardsOutput, JoinDashboardsInput, UserTenancy } from "protocols";
import { conflictError, unauthorizedError } from "../errors";
import { getComputeInstancesByTenancyRepository, getComputeInstancesRepository, getTop5CostComputeInstancesByTenancyRepository, getTop5CostComputeInstancesRepository } from "repositories/compute-instances-repository";
import { getAllTenanciesSubscriptionAmountRepository, getSubscriptionAmountByTenancyRepository, getUserDetailsByTokenRepository } from "repositories";
import { getUserDetails } from "./user-service";

export async function getDashboardService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getAllDashboards();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getTenancyDashboards(tenancies);
        return response;
    }
    
}

export async function getJoinDashboardService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (!userDetails[0].isAdmin){
        throw unauthorizedError("Apenas administradores podem acessar essa rota");
    }
    const tenancies = Object.values(body);
    const response = await getTenancyDashboards(tenancies);
    return response;
}

export async function getAllDashboards(){
    const computeInstances = await getComputeInstancesRepository();
        const top5_costVM = await getTop5CostComputeInstancesRepository();
        const creditsOCI = await getAllTenanciesSubscriptionAmountRepository();
        
        const response: DashboardsOutput = {
            user: null,
            computeInstances,
            orphan: null,
            cost_history: null,
            cost_services: null,
            top5_costVM,
            creditsOCI
        }
        return response;
}

export async function getTenancyDashboards(tenancies: string[]){
    const computeInstances = await getComputeInstancesByTenancyRepository(tenancies);
    console.log(computeInstances.length);
    const top5_costVM = await getTop5CostComputeInstancesByTenancyRepository(tenancies);
    const creditsOCI = await getSubscriptionAmountByTenancyRepository(tenancies);
    const response: DashboardsOutput = {
        user: null,
        computeInstances,
        orphan: null,
        cost_history: null,
        cost_services: null,
        top5_costVM,
        creditsOCI
    }
    return response;
}