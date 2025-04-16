import Joi from "joi";

export const joinDashboardSchema = Joi.object({
    tenancy1: Joi.string().required(),
    tenancy2: Joi.string().required(),
    tenancy3: Joi.string().allow(null)
})