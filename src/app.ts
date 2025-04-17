import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDbs } from "./config/database";
import { auditRouter, computeInstanceRouter, contractRouter, dashboardRouter, notificationsRouter, priceRouter, reshapeRouter, userRouter } from "./routers";

dotenv.config()

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK OCI!"))
  .use("/audit", auditRouter)
  .use("/computeinstances", computeInstanceRouter)
  .use("/contracts", contractRouter)
  .use("/dashboards", dashboardRouter)
  .use("/notifications", notificationsRouter)
  .use("/price", priceRouter)
  .use("/reshape", reshapeRouter)
  .use("/user", userRouter);

export function init(): Promise<Express> {
  connectDbs();
  return Promise.resolve(app);
}

export default app;
