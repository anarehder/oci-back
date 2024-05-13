import { Request, Response } from "express";
import { NewUserInput } from "../protocols";
import httpStatus from "http-status";
import { createUserService } from "@/services/user-service";

export async function createUserController (req: Request, res: Response) {
    const { username, password, isAdmin, client } = req.body as NewUserInput;
    try{
        await createUserService ( username, password, isAdmin, client );
        return res.status(httpStatus.CREATED).send(`User ${username} was created !`);
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
}