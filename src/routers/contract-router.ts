import { authenticateToken } from "../middlewares";
import { getContractsController } from "../controllers";
import { Router } from "express";

const contractRouter = Router();

contractRouter.get("/", authenticateToken, getContractsController);

export {contractRouter}