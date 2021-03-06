import dotenv from 'dotenv';

dotenv.config();

export default {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbGName: process.env.DB_G_NAME,
  port: process.env.PORT,
};
