import { getContractsService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getContractsController(req: Request, res: Response) {
    try{
        const response = await getContractsService();
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}