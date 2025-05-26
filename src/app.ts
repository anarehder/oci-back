import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDbs } from "./config/database";
import { auditRouter, blockVolumeRouter, computeInstanceRouter, contractRouter, cpusRouter, dashboardRouter, dataikuRouter, eventsRouter, latestValueRouter, notificationsRouter, priceRouter, reshapeRouter, userRouter } from "./routers";

dotenv.config()

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK OCI!"))
  .use("/audit", auditRouter)
  .use("/blockvolume", blockVolumeRouter)
  .use("/computeinstances", computeInstanceRouter)
  .use("/contracts", contractRouter)
  .use("/cpus", cpusRouter)
  .use("/dashboards", dashboardRouter)
  .use("/dataiku", dataikuRouter)
  .use("/events", eventsRouter)
  .use("/latest", latestValueRouter)
  .use("/notifications", notificationsRouter)
  .use("/price", priceRouter)
  .use("/reshape", reshapeRouter)
  .use("/user", userRouter);

export function init(): Promise<Express> {
  connectDbs();
  return Promise.resolve(app);
}

export default app;
