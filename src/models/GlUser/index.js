import attributes from './attributes';
import Project from '../Project';
import { gitlab as sequelize } from '../../connection';

const options = {
  sequelize,
  timestamps: false,
  modelName: 'GlUser',
  tableName: 'users'
};

const GlUser = sequelize.define('GlUser', attributes, options);

export default GlUser;
