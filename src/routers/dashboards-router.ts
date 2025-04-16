import { joinDashboardSchema } from "../schemas";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { getDashboardController, getJoinDashboardController } from "controllers/dashboards-controller";

const dashboardRouter = Router();

dashboardRouter.get("/", authenticateToken, getDashboardController); //pegar quando fizer o login
dashboardRouter.get("/join", authenticateToken, validateBody(joinDashboardSchema), getJoinDashboardController);//pegar quando selecionar a tenancy

export {dashboardRouter}