import {  db2 } from "../config/database";
import { MemoryUtilization } from "../protocols";
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
        memory_usage: instance.cpu_usage,
    }));

    return memory;
}

export async function getLatestMemoryRepository() {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM MemoryUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) 
            ORDER BY cpu_usage DESC;
        `);

    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.cpu_usage,
    }));
    return memory;
}

export async function getLatestMemoryByTenancyRepository(tenancies: string[]){
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const query = `SELECT * FROM MemoryUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) AND profile_name IN (${placeholders}) ORDER BY cpu_usage desc;`;

    const [rows] = await db2.query<RowDataPacket[]>(`${query}`);
    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.cpu_usage,
    }));

    return memory;
}

export async function getLatestMemoryByTimeRepository(interval: string) {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM MemoryUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL ${interval}) 
            ORDER BY cpu_usage DESC;
        `);

    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.cpu_usage,
    }));
    return memory;
}

export async function getMemoryByDisplayNameAndTimeRepository(displayName:string, interval: string) {
    const query = `SELECT * FROM MemoryUtilization
            WHERE resourceDisplayName = '${displayName}' AND metric_timestamp >= DATE_SUB(NOW(), INTERVAL ${interval}) ORDER BY metric_timestamp DESC`;
    const [rows] = await db2.query<RowDataPacket[]>(query);

    const memory: MemoryUtilization[] = rows.map(instance => ({
        profile_name: instance.profile_name,
        tenancy_name: instance.tenancy_name,
        compartment_id: instance.compartment_id,
        region: instance.region,
        resourceDisplayName: instance.resourceDisplayName,
        resourceId: instance.resourceId,
        metric_timestamp: instance.metric_timestamp,
        memory_usage: instance.cpu_usage,
    }));

    return memory;
}