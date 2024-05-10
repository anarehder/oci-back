import { getReshapeController } from "../controllers";
import { Router } from "express";

const reshapeRouter = Router();

reshapeRouter.get("/", getReshapeController);

export {reshapeRouter}