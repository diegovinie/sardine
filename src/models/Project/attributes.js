import { DataTypes } from 'sequelize';

export default {
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
