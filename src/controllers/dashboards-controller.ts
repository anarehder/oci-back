import { getDashboardService, getJoinDashboardService } from "../services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getDashboardController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try{
        const response = await getDashboardService(userToken);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getJoinDashboardController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    const body = req.body;
    try{
        const response = await getJoinDashboardService(userToken, body);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}