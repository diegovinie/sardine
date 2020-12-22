import attributes from './attributes';
import ProcessorInstance from '../ProcessorInstance';
import sequelize from '../../connection';

const options = {
  sequelize, // We need to pass the connection instance
  timestamps: false,
  modelName: 'Experiment', // We need to choose the model name,
  tableName: 'experiment'
};

const Experiment = sequelize.define('Experiment', attributes, options);

Experiment.hasOne(ProcessorInstance);

ProcessorInstance.belongsTo(Experiment);

export default Experiment;
