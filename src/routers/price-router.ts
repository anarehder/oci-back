import { getPriceController } from "../controllers";
import { Router } from "express";

const priceRouter = Router();

priceRouter.get("/", getPriceController);

export {priceRouter}