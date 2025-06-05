import { db2 } from "../config/database";
import { CPUMEM_avg, CpuUtilization } from "../protocols";
import { RowDataPacket } from "mysql2";

export async function getCPUByDisplayNameRepository(displayName:string) {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM CpuUtilization
            WHERE resourceDisplayName = ${displayName}
            AND metric_timestamp >= DATE_SUB(NOW(), INTERVAL 24 HOUR) 
            ORDER BY metric_timestamp DESC;
        `);

    const cpus: CpuUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        cpu_usage: instance.cpu_usage,
    }));

    return cpus;
}
export async function getLatestCpusRepository() {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM CpuUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) 
            ORDER BY cpu_usage DESC
            LIMIT 20;
        `);

    const cpus: CpuUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        cpu_usage: instance.cpu_usage,
    }));

    return cpus;
}

export async function get30MinAverageCPURepository(){
    const query = `SELECT resourceDisplayName, ComputeInstances.tenancy_name, AVG(cpu_usage) AS avg_cpu_usage FROM CpuUtilization JOIN ComputeInstances ON CpuUtilization.resourceDisplayName = ComputeInstances.display_name WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 30 MINUTE) GROUP BY resourceDisplayName ORDER BY avg_cpu_usage DESC LIMIT 8;`;

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const cpus: CPUMEM_avg[] = rows.map(instance => ({
        resourceDisplayName: instance.resourceDisplayName,
        tenancy_name: instance.tenancy_name,
        avg_cpu_usage: instance.avg_cpu_usage,
    }));

    return cpus;
}


export async function get30MinAverageCPUByTenancyRepository(tenancies: string[]){
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const query = `SELECT resourceDisplayName, ComputeInstances.tenancy_name, AVG(cpu_usage) AS avg_cpu_usage FROM MemoryUtilization JOIN ComputeInstances ON CpuUtilization.resourceDisplayName = ComputeInstances.display_name WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 30 MINUTE) AND profile_name IN (${placeholders}) GROUP BY resourceDisplayName ORDER BY avg_cpu_usage DESC LIMIT 8;`;

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const cpus: CPUMEM_avg[] = rows.map(instance => ({
        resourceDisplayName: instance.resourceDisplayName,
        tenancy_name: instance.tenancy_name,
        avg_cpu_usage: instance.avg_cpu_usage,
    }));

    return cpus;
}

export async function get30MinAverageCPUByDisplayNameRepository(resourceDisplayName: string){

    const query = `SELECT resourceDisplayName, ComputeInstances.tenancy_name, AVG(cpu_usage) AS avg_cpu_usage FROM CpuUtilization JOIN ComputeInstances ON CpuUtilization.resourceDisplayName = ComputeInstances.display_name WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 30 MINUTE) AND resourceDisplayName = '${resourceDisplayName}' GROUP BY resourceDisplayName ORDER BY avg_cpu_usage DESC LIMIT 8;`;

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const cpus: CPUMEM_avg[] = rows.map(instance => ({
        resourceDisplayName: instance.resourceDisplayName,
        tenancy_name: instance.tenancy_name,
        avg_cpu_usage: instance.avg_cpu_usage,
    }));

    return cpus;
}


export async function getLatestCpusByTenancyRepository(tenancies: string[]){
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const query = `SELECT * FROM CpuUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) AND profile_name IN (${placeholders}) ORDER BY cpu_usage desc LIMIT 20;`;

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const cpus: CpuUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        cpu_usage: instance.cpu_usage,
    }));

    return cpus;
}


export async function getLatestCPUByTimeRepository(interval: string) {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM CpuUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL ${interval}) 
            ORDER BY cpu_usage DESC;
        `);

    const cpus: CpuUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        cpu_usage: instance.cpu_usage,
    }));

    return cpus;
}

export async function getCPUByDisplayNameAndTimeRepository(displayName: string, interval: string) {
    const query = `SELECT * FROM CpuUtilization
            WHERE resourceDisplayName = '${displayName}' AND metric_timestamp >= DATE_SUB(NOW(), INTERVAL ${interval}) ORDER BY metric_timestamp ASC`;
    const [rows] = await db2.query<RowDataPacket[]>(query);

    const cpus: CpuUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        cpu_usage: instance.cpu_usage,
    }));

    return cpus;
}