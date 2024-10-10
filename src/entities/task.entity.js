import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const TaskEntity = database.define("tb_task", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  check: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export { TaskEntity }
