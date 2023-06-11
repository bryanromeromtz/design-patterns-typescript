import express from "express";

import { HealthController } from "../infrastructure/controllers/health-controller";

const healthRouter = express.Router();

const healthController = new HealthController();

healthRouter.get("/", healthController.run.bind(healthController));

export { healthRouter };
