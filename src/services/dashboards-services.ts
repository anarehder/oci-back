import { JoinDashboardsInput } from "protocols";
import { conflictError } from "../errors";
import { getComputeInstancesRepository } from "repositories/compute-instances-repository";

export async function getDashboardService(userToken: string) {
    const token = userToken.slice(7);
    const computeInstances = await getComputeInstancesRepository();
    // const userDetails = await getUserDetailsByTokenRepository(token);
    return computeInstances;
    // if (userDetails.isAdmin === 1 && userDetails.tenancy === "ACCERTETECNOLOGIA"){
    //     const response = await getClientsListRespository();
    //     return response;
    // } else {
    //     throw conflictError("This user cant use this route");
    // }
    
}

export async function getJoinDashboardService(userToken: string, body:JoinDashboardsInput) {
    const token = userToken.slice(7);

    // const userDetails = await getUserDetailsByTokenRepository(token);

    // if (userDetails.isAdmin === 1 && userDetails.tenancy === "ACCERTETECNOLOGIA"){
    //     const response = await getClientsListRespository();
    //     return response;
    // } else {
    //     throw conflictError("This user cant use this route");
    // }
}