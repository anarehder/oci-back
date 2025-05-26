import { Request, Response } from "express";
import httpStatus from "http-status";
import { getEventsService, getJoinEventsService } from "../services";

export async function getEventsController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    const {type} = req.params;
    try {
        const response = await getEventsService(userToken, type);
        // Teste antes de enviar
        console.log("Tipo de resposta:", typeof response);
        console.log("Primeiro item:", response[0]);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getJoinEventsController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    const body = req.body;
    const {type} = req.params;
    try{
        const response = await getJoinEventsService(userToken, body, type);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}
