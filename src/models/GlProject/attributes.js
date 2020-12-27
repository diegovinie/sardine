import { DataTypes } from 'sequelize';

export default {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
