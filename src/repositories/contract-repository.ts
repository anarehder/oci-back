import { db } from "../config/database";
import { RowDataPacket } from "mysql2";

export async function getContractsRespository() {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM ContratosOCI
    `);

    return response[0];
    
}

export async function getContractsByTenancyRespository(tenancy: string) {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM ContratosOCI
    WHERE Tenancy = ?
    ;`, [tenancy]);

    return response[0];
    
}