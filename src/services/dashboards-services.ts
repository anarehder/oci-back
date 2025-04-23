import { DashboardsOutput, JoinDashboardsInput } from "../protocols";
import { unauthorizedError } from "../errors";
import { getUserDetails } from "./user-service";
import { getAllMonthCosts, getAllTenanciesSubscriptionAmountRepository, getComputeInstancesByTenancyRepository, getComputeInstancesRepository, getMonthCostsByTenancyRepository, getSubscriptionAmountByTenancyRepository, getTenanciesListRepository, getTop5CostComputeInstancesByTenancyRepository, getTop5CostComputeInstancesRepository } from "../repositories";

export async function getDashboardService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getAllDashboards();
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy.toLocaleLowerCase());
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
    const filteredTenancies = Object.fromEntries(
        Object.entries(body).filter(([key, value]) => value !== null)
    );
    const tenancies = Object.values(filteredTenancies);

    const response = await getTenancyDashboards(tenancies);
    return response;
}

export async function getAllDashboards(){
    const computeInstances = await getComputeInstancesRepository();
    const top5_costVM = await getTop5CostComputeInstancesRepository();
    const creditsOCI = await getAllTenanciesSubscriptionAmountRepository();
    const cost_history = await getAllMonthCosts();
    const tenanciesList = await getTenanciesListRepository();
    const tenancies = tenanciesList.map(t => t.tenancy_name);
    const response: DashboardsOutput = {
        tenancies,
        user: null,
        computeInstances,
        orphan: null,
        cost_history: cost_history,
        cost_services: null,
        top5_costVM,
        creditsOCI
    }
    return response;
}

export async function getTenancyDashboards(tenancies: string[]){
    const computeInstances = await getComputeInstancesByTenancyRepository(tenancies);
    const top5_costVM = await getTop5CostComputeInstancesByTenancyRepository(tenancies);
    const creditsOCI = await getSubscriptionAmountByTenancyRepository(tenancies);
    const cost_history = await getMonthCostsByTenancyRepository(tenancies);
    const response: DashboardsOutput = {
        tenancies,
        user: null,
        computeInstances,
        orphan: null,
        cost_history: cost_history,
        cost_services: null,
        top5_costVM,
        creditsOCI
    }
    return response;
}