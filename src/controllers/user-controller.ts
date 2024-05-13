import { Request, Response } from "express";
import { LoginParams, NewUserInput } from "../protocols";
import httpStatus from "http-status";
import { createUserService, userLoginService, userLogoutService } from "../services";

export async function createUserController (req: Request, res: Response) {
    const { username, password, isAdmin, client } = req.body as NewUserInput;
    try{
        await createUserService ( username, password, isAdmin, client );
        return res.status(httpStatus.CREATED).send(`User ${username} was created !`);
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
}

export async function userLoginController(req: Request, res: Response) {
    const { username, password } = req.body as LoginParams;
    try {
        const loginReturn = await userLoginService(username, password);
        return res.status(httpStatus.OK).send(loginReturn);
    } catch (error) {
        if (error.name === "invalidCredentialsError") {
            return res.status(httpStatus.UNAUTHORIZED).send(error);
        }
        return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
}

export async function userLogoutController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try {
        await userLogoutService(userToken);
        return res.status(httpStatus.OK).send("Logout Completed");
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
}