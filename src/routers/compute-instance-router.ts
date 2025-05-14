import { computeDetailsSchema, joinDashboardSchema } from "../schemas";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { getComputeInstanceDetailsController, getComputeInstancesController,  getJoinComputeInstancesController } from "../controllers";

const computeInstanceRouter = Router();

computeInstanceRouter.get("/", authenticateToken, getComputeInstancesController); //pegar quando fizer o login
computeInstanceRouter.post("/join", authenticateToken, validateBody(joinDashboardSchema), getJoinComputeInstancesController);//pegar quando selecionar a tenancy
computeInstanceRouter.post("/details", authenticateToken, validateBody(computeDetailsSchema), getComputeInstanceDetailsController);//pegar quando selecionar a tenancy

export {computeInstanceRouter}