import { DashboardsOutput, JoinDashboardsInput } from "../protocols";
import { unauthorizedError } from "../errors";
import { getUserDetails } from "./user-service";
import { getClientsTenanciesListRepository, getComputeInstancesByTenancyRepository, getComputeInstancesRepository, getMonthCostsByTenancyRepository, getMonthDailyCostsRepository, getMonthServiceCostsByTenancyRepository, getMonthServiceCostsGroupByRepository, getMonthSKUCostsByTenancyRepository, getMonthSKUCostsGroupByRepository, getOrphanBVRepository, getOrphanByTenancyRepository, getSubscriptionAmountByTenancyRepository, getTop5CostComputeInstancesByTenancyRepository, getTop5CostComputeInstancesRepository } from "../repositories";
import { getCommitDetailsRepository, getSubscriptionDetailsRepository } from "./price-service";

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
    if (!userDetails){
        throw unauthorizedError("Usuário não encontrado!");
    }
    // const filteredTenancies = Object.fromEntries(
    //     Object.entries(body).filter(([key, value]) => value !== null)
    // );
    const tenancies = [body.tenancy1?.toLowerCase(), body.tenancy2?.toLowerCase(), body.tenancy3?.toLowerCase()].filter(Boolean);
    // const tenancies = Object.values(filteredTenancies);

    const response = await getTenancyDashboards(tenancies, month);
    return response;
}

export async function getAllDashboards(month: string){
    const computeInstances = await getComputeInstancesRepository();
    const top5_costVM = await getTop5CostComputeInstancesRepository();
    const orphan = await getOrphanBVRepository();

    const tenanciesList = await getClientsTenanciesListRepository();
    const tenancies = tenanciesList.map(t => t.Tenancy.toLowerCase());

    const cost_services = await getMonthServiceCostsGroupByRepository(tenancies, month);
    const cost_SKU = await getMonthSKUCostsGroupByRepository(tenancies, month);

    const response: DashboardsOutput = {
        tenancies,
        user: null,
        computeInstances,
        orphan,
        cost_services,
        cost_SKU,
        top5_costVM,
    }
    return response;
}

export async function getTenancyDashboards(tenancies: string[], month: string){
    const computeInstances = await getComputeInstancesByTenancyRepository(tenancies);
    const orphan = await getOrphanByTenancyRepository(tenancies);

    const cost_services = await getMonthServiceCostsGroupByRepository(tenancies, month);
    const top5_costVM = await getTop5CostComputeInstancesByTenancyRepository(tenancies)
    const cost_SKU = await getMonthSKUCostsGroupByRepository(tenancies, month);

    // const creditsOCI = await getSubscriptionAmountByTenancyRepository(tenancies);
    
    const cost_history = await getMonthCostsByTenancyRepository(tenancies);
    const cost_daily = await getMonthDailyCostsRepository(tenancies, month);

    const subscriptionDetails = await getSubscriptionDetailsRepository(tenancies);
    const commitDetails = await getCommitDetailsRepository(tenancies);
    
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
        commitDetails
    }
    return response;
}