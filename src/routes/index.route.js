import { taskRoute } from "./task.route.js";
import { Router } from "express";

const router = Router();

router.use(taskRoute);

export { router };
