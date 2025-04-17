import { getAuditsService } from "../services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getAuditsController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try{
        const response = await getAuditsService(userToken);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}