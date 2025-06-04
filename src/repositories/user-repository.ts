import { User, UserTenancy } from "../protocols";
import { db, prisma1 } from "../config/database";
import { RowDataPacket } from "mysql2";
import { workerData } from "worker_threads";

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
    const user = await prisma1.user.findFirst({
        where: {
            username
        },
    });

    return user;
}

export async function getClientByClientNameRepository(client: string) {
    const response = await db.query<RowDataPacket[]>(`
        SELECT * FROM Clients
        WHERE client = ?;
    `, [client]);
    return response[0];
}

export async function getUserDetailsByTokenRepository(token: string){
    const response: UserTenancy[] = await prisma1.$queryRaw`
        SELECT userId, User.username, User.isAdmin, User.client, Clients.tenancy
        FROM Session
        JOIN User ON User.id = Session.userId
        JOIN Clients ON Clients.client = User.client
        WHERE token = ${token} and Client.Active = true;
    ;`
    return response;
}

export async function userSessionRepository(userId: number, token: string) {
    const response = await db.query<RowDataPacket[]>(`
        SELECT * FROM Session
        WHERE userId = ? AND token = ?;
    `, [userId, token]);
    return response[0];
}