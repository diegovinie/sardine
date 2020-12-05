import { Sequelize, Model, DataTypes } from 'sequelize';

const dbUser = 'mlreef';
const dbPassword = 'password';
const dbHost = 'ec2-18-157-161-187.eu-central-1.compute.amazonaws.com';
const dbPort = 6000;
const dbName = 'mlreef_backend';

const uri = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

export default new Sequelize(uri); // Example for postgres
