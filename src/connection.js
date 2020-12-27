import { Sequelize, Model, DataTypes } from 'sequelize';
import config from './config';

const {
  dbUser,
  dbPassword,
  dbHost,
  dbPort,
  dbName,
  dbGName,
} = config;

const uri = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
const guri = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbGName}`;

export const gitlab = new Sequelize(guri);

export default new Sequelize(uri);
