import { createUserRepository, createUserSessionRepository, deleteUserSessionRepository, getClientByClientNameRepository, getUserByUsernameRepository } from "../repositories";
import bcrypt from "bcrypt";
import { conflictError, invalidCredentialsError } from "../errors";
import { UserLogin } from "../protocols";
import jwt from "jsonwebtoken";

export async function createUserService(username: string, password: string, isAdmin:boolean, client: string) {
    await validateUniqueUsername(username);
    if (isAdmin === true && client !== "Accerte Tecnologia") {
        throw conflictError("This client can't be an admin");
    }
    await validateClient(client);
    
    const hashedPassword = await bcrypt.hash(password, 12);
    await createUserRepository(username, hashedPassword, isAdmin, client);
}

export async function userLoginService(username: string, password: string) {
    const user = await getUserByUsernameRepository(username);
    if (!user) {
        throw conflictError("This username does not exist");
    }
    await validatePassword(password, user.password);

    const token = await createSession(user.id);

    const fullResponse: UserLogin = {
                        id: user.id,
                        username: user.username,
                        isAdmin: user.isAdmin,
                        client: user.client,
                        token
    }
    return (fullResponse);
}

export async function userLogoutService(userToken: string) {
    const token = userToken.slice(7);
    await deleteUserSessionRepository(token);
}

async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await createUserSessionRepository(userId, token);

    return token;
}

async function validateUniqueUsername(username: string) {
    const usernameExists = await getUserByUsernameRepository(username);
    if (usernameExists) {
        throw conflictError("This username already exist");
    }
}

async function validateClient(client: string) {
    const clientExists = await getClientByClientNameRepository(client);
    if (clientExists.length === 0) {
        throw conflictError("This client does not exist");
    }
}

async function validatePassword(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
}