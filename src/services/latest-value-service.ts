import { JoinDashboardsInput } from "../protocols";
import { get30MinAverageCPUByDisplayNameRepository, get30MinAverageMemoryByDisplayNameRepository } from "../repositories";
import { getJoinLatestCpusService, getLatestCpusService } from "./cpus-service";
import { getJoinLatestMemoryService, getLatestMemoryService } from "./memory-service";

export async function getLatestCPUMEMService(userToken: string) {
    //com esses items pegar os proximos
    const memory = await getLatestMemoryService(userToken);
    const topMEM = await Promise.all(memory.map(async (i) => {
        const cpuResult = await get30MinAverageCPUByDisplayNameRepository(i.resourceDisplayName);
        return {
            displayName: i.resourceDisplayName,
            tenancy: i.tenancy_name,
            cpu: cpuResult[0]?.avg_cpu_usage ?? 0, // fallback para 0 se não vier nada
            mem: i.avg_memory_usage
        };
    }));
    //com esses items pegar os proximos
    const cpu = await getLatestCpusService(userToken);
    const topCPU = await Promise.all(cpu.map(async (i) => {
        const memResult = await get30MinAverageMemoryByDisplayNameRepository(i.resourceDisplayName);
        return {
            displayName: i.resourceDisplayName,
            tenancy: i.tenancy_name,
            cpu: i.avg_cpu_usage,  // fallback para 0 se não vier nada
            mem: memResult[0]?.avg_memory_usage ?? 0,
        };
    }));
    const response = {topCPU, topMEM};

    return response;
}

export async function getJoinLatestCPUMEMService(userToken: string, body: JoinDashboardsInput) {
    const memory = await getJoinLatestMemoryService (userToken, body);
    const topMEM = await Promise.all(memory.map(async (i) => {
        const cpuResult = await get30MinAverageCPUByDisplayNameRepository(i.resourceDisplayName);
        return {
            displayName: i.resourceDisplayName,
            tenancy: i.tenancy_name,
            cpu: cpuResult[0]?.avg_cpu_usage ?? 0, // fallback para 0 se não vier nada
            mem: i.avg_memory_usage
        };
    }));
    //com esses items pegar os proximos
    const cpu = await getJoinLatestCpusService(userToken, body)
    const topCPU = await Promise.all(cpu.map(async (i) => {
        const memResult = await get30MinAverageMemoryByDisplayNameRepository(i.resourceDisplayName);
        return {
            displayName: i.resourceDisplayName,
            tenancy: i.tenancy_name,
            cpu: i.avg_cpu_usage,  // fallback para 0 se não vier nada
            mem: memResult[0]?.avg_memory_usage ?? 0,
        };
    }));
    const response = {topCPU, topMEM};

    return response;
}