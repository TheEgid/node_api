import { Router } from 'express';
// import  logger  from 'sequelize';
import db from '../database/models';
// const { Sequelize, DataTypes } = require('sequelize');

const routes = Router();


async function healthcare() {
  try {
    await db.authenticate();
    // logger.info('Connection has been established successfully.');
  } catch (error) {
    // logger.info('Unable to connect to the database:', error);
  }
}

// '/users'
routes.get('/', async (req, res) => {
  await healthcare();
  res.json({ message: 'Ok' });
});

export default routes;
