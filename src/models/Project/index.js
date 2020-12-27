import attributes from './attributes';
import Experiment from '../Experiment';
import GlProject from '../GlProject';
import sequelize from '../../connection';

const options = {
  sequelize, // We need to pass the connection instance
  timestamps: false,
  modelName: 'Project', // We need to choose the model name,
  tableName: 'mlreef_project'
};

const Project = sequelize.define('Project', attributes, options);

Project.hasMany(Experiment, {
  foreignKey: 'dataProjectId'
});

Experiment.belongsTo(Project, {
  foreignKey: 'dataProjectId'
});

// Job.belongsTo(Project, {
//   foreignKey: 'projectId'
// });


export default Project;
