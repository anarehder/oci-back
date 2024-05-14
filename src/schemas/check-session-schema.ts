import { SessionParams } from "../protocols";
import Joi from "joi";

export const checkSessionSchema = Joi.object<SessionParams>({
    userId: Joi.number().required(),
    token: Joi.string().min(6).required()
})