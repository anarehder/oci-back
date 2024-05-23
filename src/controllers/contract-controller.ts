import { getClientsListService, getContractsService } from "../services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getContractsController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try{
        const response = await getContractsService(userToken);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getClientsListController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    try{
        const response = await getClientsListService(userToken);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}