import { getContractsController } from "@/controllers";
import { Router } from "express";

const contractRouter = Router();

contractRouter.get("/", getContractsController);

export {contractRouter}