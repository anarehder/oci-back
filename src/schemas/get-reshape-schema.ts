import { ReshapeInput } from "../protocols";
import Joi from "joi";

export const getReshapeSchema = Joi.object<ReshapeInput>({
    tenancy: Joi.string().min(3).required(),
})