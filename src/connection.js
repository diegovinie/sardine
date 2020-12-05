import { Sequelize, Model, DataTypes } from 'sequelize';
import config from './config';

const {
  dbUser,
  dbPassword,
  dbHost,
  dbPort,
  dbName,
} = config;

const uri = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

export default new Sequelize(uri);
