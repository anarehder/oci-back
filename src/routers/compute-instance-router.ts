import { joinDashboardSchema } from "../schemas";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { getDashboardController, getJoinDashboardController } from "../controllers";

const computeInstanceRouter = Router();

computeInstanceRouter.get("/", authenticateToken, getDashboardController); //pegar quando fizer o login
computeInstanceRouter.post("/join", authenticateToken, validateBody(joinDashboardSchema), getJoinDashboardController);//pegar quando selecionar a tenancy

export {computeInstanceRouter}