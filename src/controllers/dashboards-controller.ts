import { getDashboardService, getJoinDashboardService } from "../services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getDashboardController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    let { month } = req.params;

    if (!month) {
        const today = new Date();
        month = today.toISOString().slice(0, 7); // YYYY-MM
    }

    const isValidMonth = /^\d{4}-(0[1-9]|1[0-2])$/.test(month);

    if (!isValidMonth) {
        return res.status(400).json({ error: "Invalid month format. Use YYYY-MM." });
    }
    try {
        const response = await getDashboardService(userToken, month);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function getJoinDashboardController(req: Request, res: Response) {
    const userToken = req.headers.authorization;
    const body = req.body;
    let { month } = req.params;

    if (!month) {
        const today = new Date();
        month = today.toISOString().slice(0, 7); // YYYY-MM
    }

    const isValidMonth = /^\d{4}-(0[1-9]|1[0-2])$/.test(month);

    if (!isValidMonth) {
        return res.status(400).json({ error: "Invalid month format. Use YYYY-MM." });
    }
    try{
        const response = await getJoinDashboardService(userToken, body, month);
        return res.status(httpStatus.OK).send(response);
    } catch(error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}