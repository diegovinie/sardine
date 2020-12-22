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
};
