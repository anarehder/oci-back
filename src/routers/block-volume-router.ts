import { Router } from "express";
import { getBlockVolumeController, getJoinBlockVolumeController } from "../controllers";
import { authenticateToken, validateBody } from "../middlewares";
import { joinDashboardSchema } from "../schemas";

const blockVolumeRouter = Router();

blockVolumeRouter.get("/", authenticateToken, getBlockVolumeController); //pegar quando fizer o login
blockVolumeRouter.post("/join", authenticateToken, validateBody(joinDashboardSchema), getJoinBlockVolumeController);//pegar quando selecionar a tenancy

export {blockVolumeRouter}