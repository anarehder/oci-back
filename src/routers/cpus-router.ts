import { getJoinLatestCpusController, getLatestCpusController } from "../controllers";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { joinDashboardSchema } from "../schemas";

const cpusRouter = Router();

cpusRouter.get("/", authenticateToken, getLatestCpusController); //pegar quando fizer o login
cpusRouter.post("/join", authenticateToken, validateBody(joinDashboardSchema), getJoinLatestCpusController);//pegar quando selecionar a tenancy

export {cpusRouter}