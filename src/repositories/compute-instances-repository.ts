import { db2 } from "../config/database";
import { RowDataPacket } from "mysql2";

export async function getComputeInstancesRepository(){
    const [response] = await db2.query<RowDataPacket[]>(`
    SELECT *
    FROM ComputeInstances;`);
    
    // const lastDay: string = response[0].Day;

    return response;
}
