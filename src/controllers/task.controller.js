import { TaskService } from "../services/Task.entity.js";

const instanceTaskService = new TaskService();

const createTask = async (req, res) => {
  const { task } = req.body;
  const newTask = await instanceTaskService.createTaskService(task);
  res.status(201).json({ newTask });
};

const getAllTasks = async (req, res) => {
  const allTask = await instanceTaskService.getAllTaskService();
  res.json({ allTask });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { newTask } = req.body;
  const taskUpdate = await instanceTaskService.updateTaskService(id, newTask);
  res.json({ taskUpdate });
};

const updateCheck = async (req, res) => {
  const { id } = req.params;
  const checkUpdate = await instanceTaskService.updateCheckService(id);
  res.json({ checkUpdate });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const delTask = await instanceTaskService.deleteTaskService(id);
  res.json({ delTask });
};

export { createTask, getAllTasks, updateCheck, updateTask, deleteTask }
