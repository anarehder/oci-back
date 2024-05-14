import { checkSessionSchema, createUserSchema, loginSchema } from "../schemas";
import { authenticateToken, validateBody } from "../middlewares";
import { Router } from "express";
import { createUserController, userLoginController, userLogoutController, userSessionController } from "@/controllers";

const userRouter = Router();

userRouter.post("/", authenticateToken, validateBody(createUserSchema), createUserController);
userRouter.post("/login", validateBody(loginSchema), userLoginController);
userRouter.delete("/logout", authenticateToken, userLogoutController);
userRouter.post("/session", validateBody(checkSessionSchema), userSessionController);

export { userRouter };