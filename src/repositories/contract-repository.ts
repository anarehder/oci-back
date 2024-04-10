import { db } from "@/config/database";
import { RowDataPacket } from "mysql2";

export async function getContractsRespository() {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM TesteContratos
    `);

    return response[0];
    
}