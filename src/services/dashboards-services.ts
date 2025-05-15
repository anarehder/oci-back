import { DashboardsOutput, JoinDashboardsInput } from "../protocols";
import { unauthorizedError } from "../errors";
import { getUserDetails } from "./user-service";
import { getAllMonthCosts, getAllTenanciesSubscriptionAmountRepository, getComputeInstancesByTenancyRepository, getComputeInstancesRepository, getMonthCostsByTenancyRepository, getMonthDailyCostsRepository, getMonthServiceCostsByTenancyRepository, getMonthSKUCostsByTenancyRepository, getSubscriptionAmountByTenancyRepository, getTenanciesListRepository, getTop5CostComputeInstancesByTenancyRepository, getTop5CostComputeInstancesRepository } from "../repositories";
import { getBlockVolumeListRepository, getBlockVolumesByTenancyRepository } from "../repositories/block-volume-repository";
import { getSubscriptionDetailsRepository } from "./price-service";

export async function getDashboardService(userToken: string, month: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getAllDashboards(month);
        return response;
    } else{
        const tenancies = userDetails.map(user => user.tenancy.toLocaleLowerCase());
        const response = await getTenancyDashboards(tenancies, month);
        return response;
    }
    
}

export async function getJoinDashboardService(userToken: string, body:JoinDashboardsInput, month: string) {
    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (!userDetails[0].isAdmin){
        throw unauthorizedError("Apenas administradores podem acessar essa rota");
    }
    const filteredTenancies = Object.fromEntries(
        Object.entries(body).filter(([key, value]) => value !== null)
    );
    const tenancies = Object.values(filteredTenancies);

    const response = await getTenancyDashboards(tenancies, month);
    return response;
}

export async function getAllDashboards(month: string){
    const computeInstances = await getComputeInstancesRepository();
    const top5_costVM = await getTop5CostComputeInstancesRepository();
    const creditsOCI = await getAllTenanciesSubscriptionAmountRepository();
    const cost_history = await getAllMonthCosts();
    const orphan = await getBlockVolumeListRepository();
    const tenanciesList = await getTenanciesListRepository();
    const tenancies = tenanciesList.map(t => t.tenancy_name);
    const cost_services = await getMonthServiceCostsByTenancyRepository(tenancies, month);
    const cost_SKU = await getMonthSKUCostsByTenancyRepository(tenancies, month);
    const cost_daily = await getMonthDailyCostsRepository(tenancies, month);
    const subscriptionDetails = await getSubscriptionDetailsRepository(tenancies);
    const response: DashboardsOutput = {
        tenancies,
        user: null,
        computeInstances,
        orphan,
        cost_history,
        cost_daily,
        cost_services,
        cost_SKU,
        subscriptionDetails,
        top5_costVM,
        creditsOCI
    }
    return response;
}

export async function getTenancyDashboards(tenancies: string[], month: string){
    const computeInstances = await getComputeInstancesByTenancyRepository(tenancies);
    const top5_costVM = await getTop5CostComputeInstancesByTenancyRepository(tenancies);
    const creditsOCI = await getSubscriptionAmountByTenancyRepository(tenancies);
    const orphan = await getBlockVolumesByTenancyRepository(tenancies);
    const cost_history = await getMonthCostsByTenancyRepository(tenancies);
    const cost_services = await getMonthServiceCostsByTenancyRepository(tenancies, month);
    const cost_SKU = await getMonthSKUCostsByTenancyRepository(tenancies, month);
    const cost_daily = await getMonthDailyCostsRepository(tenancies, month);
    const subscriptionDetails = await getSubscriptionDetailsRepository(tenancies);
    
    const response: DashboardsOutput = {
        tenancies,
        user: null,
        computeInstances,
        orphan,
        cost_history,
        cost_daily,
        cost_services,
        cost_SKU,
        subscriptionDetails,
        top5_costVM,
        creditsOCI
    }
    return response;
}