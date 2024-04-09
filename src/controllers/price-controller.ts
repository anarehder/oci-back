import { getPriceService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getPriceController(req: Request, res: Response) {
    try{
        const response = await getPriceService();
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}