import { joinDashboardSchema } from "../schemas";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { getDashboardController, getJoinDashboardController } from "../controllers";

const dashboardRouter = Router();

dashboardRouter.get("/:month?", authenticateToken, getDashboardController); //pegar quando fizer o login
dashboardRouter.post("/join/:month?", authenticateToken, validateBody(joinDashboardSchema), getJoinDashboardController);//pegar quando selecionar a tenancy

export {dashboardRouter}