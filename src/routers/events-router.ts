import { Router } from "express";
import { getEventsController, getJoinEventsController } from "../controllers";
import { authenticateToken, validateBody } from "../middlewares";
import { joinDashboardSchema } from "../schemas";

const eventsRouter = Router();

eventsRouter.get("/:type", authenticateToken, getEventsController);
eventsRouter.post("/:type", authenticateToken, validateBody(joinDashboardSchema), getJoinEventsController);//pegar quando selecionar a tenancy

// eventsRouter.get("/identity", authenticateToken, getIdentityEventsController);
// eventsRouter.post("/identity", authenticateToken, validateBody(joinDashboardSchema), getJoinIdentityEventsController);//pegar quando selecionar a tenancy
// eventsRouter.get("/compute", authenticateToken, getComputeEventsController);
// eventsRouter.post("/compute", authenticateToken, validateBody(joinDashboardSchema), getJoinComputeEventsController);//pegar quando selecionar a tenancy
// eventsRouter.get("/network", authenticateToken, getNetworkEventsController);
// eventsRouter.post("/network", authenticateToken, validateBody(joinDashboardSchema), getJoinNetworkEventsController);//pegar quando selecionar a tenancy

export {eventsRouter}