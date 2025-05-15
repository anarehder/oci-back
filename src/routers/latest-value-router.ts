import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { joinDashboardSchema } from "../schemas";
import { getJoinLatestCPUMEMController, getLatestCPUMEMController } from "../controllers";

const latestValueRouter = Router();

latestValueRouter.get("/cpumem", authenticateToken, getLatestCPUMEMController); //pegar quando fizer o login
latestValueRouter.post("/cpumem/join", authenticateToken, validateBody(joinDashboardSchema),getJoinLatestCPUMEMController);//pegar quando selecionar a tenancy

export {latestValueRouter}