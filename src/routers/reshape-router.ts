import { authenticateToken, validateBody } from "../middlewares";
import { getReshapeController } from "../controllers";
import { Router } from "express";
import { getReshapeSchema } from "../schemas";

const reshapeRouter = Router();

reshapeRouter.post("/", authenticateToken, validateBody(getReshapeSchema), getReshapeController);

export {reshapeRouter}