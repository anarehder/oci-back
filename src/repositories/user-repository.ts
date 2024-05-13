import { db } from "../config/database";
import { RowDataPacket } from "mysql2";

export async function createUserRepository(username: string, password: string, isAdmin:boolean, client: string) {
    const response = await db.query<RowDataPacket[]>(`
        INSERT INTO User (username, password, isAdmin, client)
        VALUES (?, ?, ?, ?);
    `, [username, password, isAdmin, client]);
    return response[0];
}

export async function getUserByUsernameRepository(username: string) {
    const response = await db.query<RowDataPacket[]>(`
        SELECT * FROM User
        WHERE username = ?;
    `, [username]);

    return response[0];
}

export async function getClientByClientNameRepository(client: string) {
    const response = await db.query<RowDataPacket[]>(`
        SELECT * FROM Clients
        WHERE client = ?;
    `, [client]);
    return response[0];
}