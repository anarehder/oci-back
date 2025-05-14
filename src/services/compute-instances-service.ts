import { JoinDashboardsInput } from "../protocols";
import { conflictError, unauthorizedError } from "../errors";
import { getUserDetails } from "./user-service";
import { getComputeInstancesByDisplayNameRepository, getComputeInstancesByTenancyRepository, getComputeInstancesRepository, getCPUByDisplayNameAndTimeRepository, getMemoryByDisplayNameAndTimeRepository } from "../repositories";

export async function getComputeInstancesService(userToken: string) {
    const token = userToken.slice(7);
    // pegar o cliente com a tenancy
    const userDetails = await getUserDetails(token);
    if (userDetails[0].isAdmin){
        const response = await getComputeInstancesRepository();
        return response;
    } else {
        const tenancies = userDetails.map(user => user.tenancy);
        const response = await getComputeInstancesByTenancyRepository(tenancies);
        return response;
    }

}

export async function getJoinComputeInstancesService(userToken: string, body: JoinDashboardsInput) {

    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    const userTenancies = userDetails.map(user => user.tenancy.toLowerCase());
    const tenancies = [body.tenancy1?.toLowerCase(), body.tenancy2?.toLowerCase(), body.tenancy3?.toLowerCase()].filter(Boolean);

    
    // Verifica se todas as chaves de filteredTenancies estão incluídas em tenancies
    const isValid = tenancies.every(key => userTenancies.includes(key));
    if (userDetails[0].isAdmin) {
        const response = await getComputeInstancesByTenancyRepository(tenancies);
        return response;
    }
    
    if (!isValid) {
        throw conflictError("Você não tem acesso às tenancies desejadas");
    } else {
        const response = await getComputeInstancesByTenancyRepository(tenancies);
        return response;
    }
}


export async function getComputeInstanceDetailsService(userToken: string, displayName: string, interval: string ) {

    const token = userToken.slice(7);
    const userDetails = await getUserDetails(token);
    if (!userDetails) throw unauthorizedError("Usuario nao encontrado");
    // const validatedInterval = validateInterval(interval);
    // console.log(validatedInterval);
    // ver se essa maquina esta na tenancy?
    const details = await getComputeInstancesByDisplayNameRepository(displayName);
    const cpu = await getCPUByDisplayNameAndTimeRepository(displayName, interval);
    const memory = await getMemoryByDisplayNameAndTimeRepository(displayName, interval);
    const response = {details, cpu, memory};
    return response;
}

const allowedIntervals = ['1 HOUR', '3 HOUR', '6 HOUR', '12 HOUR', '24 HOUR', '1 WEEK', '2 WEEK', '3 WEEK', '4 WEEK', '2 MONTH', '6 MONTH'];

export function validateInterval(input: string): string {
  if (!allowedIntervals.includes(input.toUpperCase())) {
    throw new Error('Intervalo inválido');
  }
  console.log(input);
  return input.toUpperCase();
}