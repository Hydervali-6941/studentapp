// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  port: process.env.PORT_N0,
  dbHost: process.env.DATABASE_HOST,
  dbPort: process.env.DATABASE_PORT,
  dbUserName: process.env.DB_USER_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DATABASE_NAME
};
