import Joi from "joi";

export const computeDetailsSchema = Joi.object({
    displayName: Joi.string().required(),
    interval: Joi.string().required()
})