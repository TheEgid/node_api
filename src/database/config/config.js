module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 1,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: console.log,
  },
};
