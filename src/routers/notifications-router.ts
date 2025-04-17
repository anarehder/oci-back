import { getNotificationsController } from "../controllers";
import { authenticateToken } from "../middlewares";
import { Router } from "express";

const notificationsRouter = Router();

notificationsRouter.get("/", authenticateToken, getNotificationsController); //pegar quando fizer o login

export {notificationsRouter}