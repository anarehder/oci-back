import { Request, Response } from "express";
import httpStatus from "http-status";
import { getBlockVolumeService, getJoinBlockVolumeService } from "../services";

export async function getBlockVolumeController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try{
        const response = await getBlockVolumeService(userToken);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getJoinBlockVolumeController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    const body = req.body;
    try{
        const response = await getJoinBlockVolumeService(userToken, body);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}
