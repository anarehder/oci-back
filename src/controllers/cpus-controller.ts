import { Request, Response } from "express";
import httpStatus from "http-status";
import { getJoinLatestCpusService, getLatestCpusService } from "../services";

export async function getLatestCpusController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try{
        const response = await getLatestCpusService(userToken);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getJoinLatestCpusController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    const body = req.body;
    try{
        const response = await getJoinLatestCpusService(userToken, body);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}