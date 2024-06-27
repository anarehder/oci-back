import { db } from "../config/database";
import { RowDataPacket } from "mysql2";

export async function getContractsRespository() {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM ContractsOCI
    `);

    return response[0];
}

export async function getContractsByTenancyRespository(tenancy: string) {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM ContractsOCI
    WHERE Tenancy = ?
    ;`, [tenancy]);

    return response[0];
}

export async function getClientsListRespository() {
    const response = await db.query<RowDataPacket[]>(`
    SELECT * 
    FROM Clients
    ORDER BY Client ASC
    ;`);

    return response[0];
}