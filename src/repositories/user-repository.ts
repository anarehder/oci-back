import { User } from "@/protocols";
import { db } from "../config/database";
import { RowDataPacket } from "mysql2";

export async function createUserRepository(username: string, password: string, isAdmin:boolean, client: string) {
    const response = await db.query<RowDataPacket[]>(`
        INSERT INTO User (username, password, isAdmin, client)
        VALUES (?, ?, ?, ?);
    `, [username, password, isAdmin, client]);
    return response[0];
}

export async function createUserSessionRepository(userId: number, token: string ) {
    const response = await db.query<RowDataPacket[]>(`
        INSERT INTO Session (userId, token)
        VALUES (?, ?);
    `, [userId, token]);
    return response[0];
}

export async function deleteUserSessionRepository(token: string ) {
    const response = await db.query<RowDataPacket[]>(`
        DELETE FROM Session
        WHERE token = ?;
    `, [token]);
    return response[0];
}


export async function getUserByUsernameRepository(username: string) {
    const [rows] = await db.query<RowDataPacket[]>(`
        SELECT * FROM User
        WHERE username = ?;
    `, [username]);

    const user: User[] = rows.map(row => ({
        id: row.id,
        username: row.username,
        password: row.password,
        isAdmin: row.isAdmin,
        client: row.client
    }));

    return user[0];
}

export async function getClientByClientNameRepository(client: string) {
    const response = await db.query<RowDataPacket[]>(`
        SELECT * FROM Clients
        WHERE client = ?;
    `, [client]);
    return response[0];
}