import { Router } from 'express';
import npmLog from 'npmlog';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: npmLog.info,
});

async function healthcare() {
  try {
    await sequelize.authenticate();
    npmLog.info('Connection has been established successfully.');
  } catch (error) {
    npmLog.info('Unable to connect to the database:', error);
  }
}

const routes = Router();

routes.get('/', async (req, res) => {
  await healthcare()
  res.json({ message: 'Ok' });
});

export default routes;
