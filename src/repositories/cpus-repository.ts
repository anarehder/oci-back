import { prisma2, db2 } from "../config/database";
import { CpuUtilization } from "../protocols";
import { RowDataPacket } from "mysql2";

export async function getLatestCpusRepository() {
    const [rows] = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM CpuUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) 
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

export async function getLatestCpusByTenancyRepository(tenancies: string[]){
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");

    const query = `SELECT * FROM CpuUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) AND profile_name IN (${placeholders}) ORDER BY cpu_usage desc;`;

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

