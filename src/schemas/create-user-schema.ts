import { NewUserInput } from "../protocols";
import Joi from "joi";

export const createUserSchema = Joi.object<NewUserInput>({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    isAdmin: Joi.bool(),
    client: Joi.string().min(3).required()
})