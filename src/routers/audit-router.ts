import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { joinDashboardSchema } from "../schemas";

const auditRouter = Router();

auditRouter.get("/", authenticateToken); //pegar quando fizer o login
auditRouter.post("/join", authenticateToken, validateBody(joinDashboardSchema));

export {auditRouter}