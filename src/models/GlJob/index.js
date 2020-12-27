import attributes from './attributes';
import Project from '../Project';
import { gitlab } from '../../connection';

const options = {
  sequelize: gitlab, // We need to pass the connection instance
  timestamps: false,
  modelName: 'GlJob', // We need to choose the model name,
  tableName: 'ci_pipelines'
};

const GlJob = gitlab.define('GlJob', attributes, options);

// Experiment.hasOne(ProcessorInstance);

// ProcessorInstance.belongsTo(Experiment);

export default GlJob;
