import Joi from "joi";

export const joinDashboardSchema = Joi.object({
    tenancy1: Joi.string().required(),
    tenancy2: Joi.string().allow(null),
    tenancy3: Joi.string().allow(null)
})