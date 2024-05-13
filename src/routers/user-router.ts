import { createUserSchema } from "../schemas";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { createUserController } from "@/controllers";

const userRouter = Router();

// userRouter.post("/", authenticateToken, validateBody(createUserSchema));
userRouter.post("/", validateBody(createUserSchema), createUserController);

export { userRouter };