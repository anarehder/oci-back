import { getJoinNotificationsController, getNotificationsController } from "../controllers";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { joinDashboardSchema } from "../schemas";

const notificationsRouter = Router();

notificationsRouter.get("/", authenticateToken, getNotificationsController); //pegar quando fizer o login
notificationsRouter.post("/join", authenticateToken, validateBody(joinDashboardSchema), getJoinNotificationsController);

export {notificationsRouter}