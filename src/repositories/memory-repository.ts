import {  db2 } from "../config/database";
import { CPUMEM_avg, MemoryUtilization } from "../protocols";
import { RowDataPacket } from "mysql2";

export async function getMemoryByDisplayNameRepository(displayName:string) {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM MemoryUtilization
            WHERE resourceDisplayName = ${displayName}
            AND metric_timestamp >= DATE_SUB(NOW(), INTERVAL 24 HOUR) 
            ORDER BY metric_timestamp DESC;
        `);

    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.memory_usage,
    }));

    return memory;
}

export async function getLatestMemoryRepository() {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM MemoryUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) 
            ORDER BY memory_usage DESC
            LIMIT 20;
        `);

    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.memory_usage,
    }));
    return memory;
}

export async function get30MinAverageMemoryRepository(){
    const query = `SELECT resourceDisplayName, tenancy_name, AVG(memory_usage) AS avg_memory_usage FROM MemoryUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 30 MINUTE) GROUP BY resourceDisplayName ORDER BY avg_memory_usage DESC LIMIT 8;`

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const memory: CPUMEM_avg[] = rows.map(instance => ({
        resourceDisplayName: instance.resourceDisplayName,
        tenancy_name: instance.tenancy_name,
        avg_memory_usage: instance.avg_memory_usage,
    }));

    return memory;
    
}

export async function get30MinAverageMemoryByTenancyRepository(tenancies: string[]){
const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const query = `SELECT resourceDisplayName, tenancy_name, AVG(memory_usage) AS avg_memory_usage FROM MemoryUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 30 MINUTE) AND profile_name IN (${placeholders}) GROUP BY resourceDisplayName ORDER BY avg_memory_usage DESC LIMIT 8;`

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const memory: CPUMEM_avg[] = rows.map(instance => ({
        resourceDisplayName: instance.resourceDisplayName,
        tenancy_name: instance.tenancy_name,
        avg_memory_usage: instance.avg_memory_usage,
    }));

    return memory;
    
}

export async function get30MinAverageMemoryByDisplayNameRepository(resourceDisplayName: string){

   const query = `SELECT resourceDisplayName, tenancy_name, AVG(memory_usage) AS avg_memory_usage FROM MemoryUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 30 MINUTE) AND resourceDisplayName = '${resourceDisplayName}' GROUP BY resourceDisplayName ORDER BY avg_memory_usage DESC LIMIT 8;`

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const memory: CPUMEM_avg[] = rows.map(instance => ({
        resourceDisplayName: instance.resourceDisplayName,
        tenancy_name: instance.tenancy_name,
        avg_memory_usage: instance.avg_memory_usage,
    }));

    return memory;
}

export async function getLatestMemoryByTenancyRepository(tenancies: string[]){
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const query = `SELECT * FROM MemoryUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) AND profile_name IN (${placeholders}) ORDER BY memory_usage desc LIMIT 20;`;

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.memory_usage,
    }));

    return memory;
}

export async function getLatestMemoryByTimeRepository(interval: string) {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM MemoryUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL ${interval}) 
            ORDER BY memory_usage DESC;
        `);

    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.memory_usage,
    }));
    return memory;
}

export async function getMemoryByDisplayNameAndTimeRepository(displayName:string, interval: string) {
    const query = `SELECT * FROM MemoryUtilization
            WHERE resourceDisplayName = '${displayName}' AND metric_timestamp >= DATE_SUB(NOW(), INTERVAL ${interval}) ORDER BY metric_timestamp ASC`;
    const [rows] = await db2.query<RowDataPacket[]>(query);

    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.memory_usage,
    }));

    return memory;
}