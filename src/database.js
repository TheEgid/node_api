// import npmLog from 'npmlog';
// import { Sequelize } from 'sequelize';
//
// export const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'postgres',
//     logging: npmLog.info,
//   },
// );
//
// async function healthcare() {
//   try {
//     await sequelize.authenticate();
//     npmLog.info('Connection has been established successfully.');
//   } catch (error) {
//     npmLog.info('Unable to connect to the database:', error);
//   }
// }
//
// export default healthcare;