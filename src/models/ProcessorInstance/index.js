import attributes from './attributes';
import sequelize from '../../connection';

const options = {
  sequelize, // We need to pass the connection instance
  timestamps: false,
  modelName: 'ProcessorInstance', // We need to choose the model name,
  tableName: 'data_processor_instance'
};

export default sequelize.define('ProcessorInstance', attributes, options);
