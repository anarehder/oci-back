import { createUserRepository, getClientByClientNameRepository, getUserByUsernameRepository } from "@/repositories/user-repository";
import { User } from "../protocols";
import bcrypt from "bcrypt";
import { conflictError } from "../errors";

export async function createUserService(username: string, password: string, isAdmin:boolean, client: string) {
    await validateUniqueUsername(username);
    if (isAdmin === true && client !== "Accerte Tecnologia") {
        throw conflictError("This client can't be an admin");
    }
    await validateClient(client);
    
    const hashedPassword = await bcrypt.hash(password, 12);
    await createUserRepository(username, hashedPassword, isAdmin, client);
}

async function validateUniqueUsername(username: string) {
    const usernameExists = await getUserByUsernameRepository(username);
    if (usernameExists.length > 0) {
        throw conflictError("This username already exist");
    }
}

async function validateClient(client: string) {
    const clientExists = await getClientByClientNameRepository(client);
    if (clientExists.length === 0) {
        throw conflictError("This client does not exist");
    }
}