import { TaskEntity } from "../entities/task.entity.js";
import { ERRORS, SUCESS } from "../shared/task.message.js";

class TaskService {
  async createTaskService(task) {
    try {
      await TaskEntity.sync();
      const createTask = await TaskEntity.create({
        task,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return error;
    }
  }

  async getAllTaskService() {
    try {
      const allTask = await TaskEntity.findAll();
      return allTask;
    } catch (error) {
      return error;
    }
  }

  async updateTaskService(id, newTask) {
    try {
      const taskId = await TaskEntity.findByPk(id);
      if (!taskId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const updateTask = await TaskEntity.update(
        { task: newTask },
        {
          where: {
            id,
          },
        }
      );
      return `${SUCESS.UPDATED}`;
    } catch (error) {
      return error;
    }
  }

  async updateCheckService(id) {
    try {
      const taskId = await TaskEntity.findByPk(id);
      if (!taskId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const currentCheck = taskId.check;
      const updateCheck = await TaskEntity.update(
        { check: !currentCheck },
        {
          where: {
            id,
          },
        }
      );
      return `${SUCESS.UPDATED}`;
    } catch (error) {
      return error;
    }
  }

  async deleteTaskService(id) {
    try {
      const taskId = await TaskEntity.findByPk(id);
      if (!taskId) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const deleteTask = await TaskEntity.destroy({
        where: {
          id,
        },
      });
      return `${SUCESS.DELETED}`;
    } catch (error) {
      return error;
    }
  }
}

export { TaskService };
