import { getAuditsController } from "../controllers";
import { authenticateToken } from "../middlewares";
import { Router } from "express";

const auditRouter = Router();

auditRouter.get("/", authenticateToken, getAuditsController); //pegar quando fizer o login

export {auditRouter}