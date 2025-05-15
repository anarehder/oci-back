import { JoinDashboardsInput } from "../protocols";
import { getJoinLatestCpusService, getLatestCpusService } from "./cpus-service";
import { getJoinLatestMemoryService, getLatestMemoryService } from "./memory-service";

export async function getLatestCPUMEMService(userToken: string) {
    const memory = await getLatestMemoryService (userToken);
    const cpu = await getLatestCpusService(userToken)
    const response = {memory, cpu};

    return response;
}

export async function getJoinLatestCPUMEMService(userToken: string, body: JoinDashboardsInput) {
    const memory = await getJoinLatestMemoryService (userToken, body);
    const cpu = await getJoinLatestCpusService(userToken, body)
    const response = {memory, cpu};

    return response;
}