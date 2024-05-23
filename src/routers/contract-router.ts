import { authenticateToken } from "../middlewares";
import { getClientsListController, getContractsController } from "../controllers";
import { Router } from "express";

const contractRouter = Router();

contractRouter.get("/", authenticateToken, getContractsController);
contractRouter.get("/clientslist", authenticateToken, getClientsListController);

export {contractRouter}