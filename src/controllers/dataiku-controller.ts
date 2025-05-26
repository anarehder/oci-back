import { Request, Response } from "express";
import httpStatus from "http-status";
import axios from "axios";
import fs from "fs";

export async function get5Lpredict(req: Request, res: Response) {
    try {
        const file = req.file;
        
        if (!file) return res.status(httpStatus.BAD_REQUEST).send("No image uploaded");

        const base64 = fs.readFileSync(file.path, { encoding: 'base64' });
        const body = {
            features: {
                input: base64
            }
        };

        const BASE_URL = 'https://api-2b45d2da-e15ff7f8-dku.us-east-1.app.dataiku.io/public/api/v1/5L_outros/5L-Outros/predict';

        const response = await axios.post(BASE_URL, body, {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN_5L_OUTROS}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data.result.prediction);
        fs.unlinkSync(file.path); // limpa a imagem temporária
        return res.status(httpStatus.OK).json(response.data.result.prediction);

    } catch (error) {
        console.error(error);
        return res.status(httpStatus.BAD_REQUEST).send("Erro na predição");
    }
}
   