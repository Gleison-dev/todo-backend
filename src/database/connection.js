import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados efetuada com sucesso!");
  } catch (error) {
    return console.error("Erro ao conectar com o banco de dados :(");
  }
};

export { sequelize, testConnection };
