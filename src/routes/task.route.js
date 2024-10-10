import { Router } from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  updateCheck,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRoute = Router();

taskRoute.post("/newTask", createTask);
taskRoute.get("/tasks", getAllTasks);
taskRoute.patch("/updateTask/:id", updateTask);
taskRoute.patch("/updateCheck/:id", updateCheck);
taskRoute.delete("/deleteTask/:id", deleteTask);

export { taskRoute };
