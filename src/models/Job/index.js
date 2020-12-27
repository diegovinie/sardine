import attributes from './attributes';
import Project from '../Project';
import { gitlab } from '../../connection';

const options = {
  sequelize: gitlab, // We need to pass the connection instance
  timestamps: false,
  modelName: 'Job', // We need to choose the model name,
  tableName: 'ci_pipelines'
};

const Job = gitlab.define('Job', attributes, options);

// Experiment.hasOne(ProcessorInstance);

// ProcessorInstance.belongsTo(Experiment);

export default Job;
