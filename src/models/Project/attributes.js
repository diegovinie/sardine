import { DataTypes } from 'sequelize';

export default {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  stars: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'stars_count',
  },

  gitlabId: {
    type: DataTypes.INTEGER,
    field: 'gitlab_id',
  },

  gitlabProject: {
    type: DataTypes.VIRTUAL,
    set(gitlabProject) {
      this.setDataValue('gitlabProject', gitlabProject);
    },
    get() {
      const p = this.getDataValue('gitlabProject');

      return p && p.toJSON();
    }
  },
};
