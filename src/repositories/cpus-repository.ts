import { prisma2, db2 } from "../config/database";
import { CpuUtilization } from "../protocols";
import { RowDataPacket } from "mysql2";

export async function getLatestCpusRepository(){
       // Executa a consulta SQL com os placeholders
    //    const response: CpuUtilization[] = await prisma2.$queryRaw`
    //        SELECT *
    //        FROM CpuUtilization
    //        WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) 
    //        ORDER BY cpu_usage DESC;
    //    `;
       const response = await db2.query<RowDataPacket[]>(`
            SELECT *
            FROM CpuUtilization
            WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) 
            ORDER BY cpu_usage DESC;
        `);
   
    // Retorna o mapeamento correto dos dados
    const cpus: CpuUtilization[] = response[0].map(instance => ({
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
    // const placeholders = tenancies.map(() => '?').join(', '); // ?, ?, ?
    const placeholders = tenancies.map(t => `'${t}'`).join(", ");
    const query = `SELECT * FROM CpuUtilization WHERE metric_timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) AND profile_name IN (${placeholders}) ORDER BY cpu_usage desc;`;

    console.log(query);
    const response: CpuUtilization[] = await prisma2.$queryRaw`${query}`;
    console.log(response);
    return response;
}

