import { DataTypes } from 'sequelize';

export default {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING,
  },

  username: {
    type: DataTypes.STRING,
  },

  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};
