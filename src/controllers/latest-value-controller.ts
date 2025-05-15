import { Request, Response } from "express";
import httpStatus from "http-status";
import { getJoinLatestCPUMEMService, getLatestCPUMEMService } from "../services";

export async function getLatestCPUMEMController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try{
        const response = await getLatestCPUMEMService(userToken);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getJoinLatestCPUMEMController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    const body = req.body;
    try{
        const response = await getJoinLatestCPUMEMService(userToken, body);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}