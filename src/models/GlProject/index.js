import attributes from './attributes';
import Project from '../Project';
import Job from '../Job';
import { gitlab as sequelize } from '../../connection';

const options = {
  sequelize, // We need to pass the connection instance
  timestamps: false,
  modelName: 'GlProject', // We need to choose the model name,
  tableName: 'projects'
};

const GlProject = sequelize.define('GlProject', attributes, options);

export default GlProject;
