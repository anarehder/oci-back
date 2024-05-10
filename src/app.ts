import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/database";
import { contractRouter, priceRouter, reshapeRouter } from "./routers";

dotenv.config()

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK OCI!"))
  .use("/contracts", contractRouter)
  .use("/price", priceRouter)
  .use("/reshape", reshapeRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export default app;
