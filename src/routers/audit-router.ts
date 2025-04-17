import { getAuditsController, getJoinAuditsController } from "../controllers";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { joinDashboardSchema } from "../schemas";

const auditRouter = Router();

auditRouter.get("/", authenticateToken, getAuditsController); //pegar quando fizer o login
auditRouter.post("/join", authenticateToken, validateBody(joinDashboardSchema), getJoinAuditsController);

export {auditRouter}