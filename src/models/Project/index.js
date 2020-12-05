import attributes from './attributes';
import sequelize from '../../connection';

const options = {
  sequelize, // We need to pass the connection instance
  timestamps: false,
  modelName: 'Project', // We need to choose the model name,
  tableName: 'mlreef_project'
};

export default sequelize.define('Project', attributes, options);