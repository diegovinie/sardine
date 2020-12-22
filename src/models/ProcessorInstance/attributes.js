import { DataTypes } from 'sequelize';

export default {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  processorType: {
    type: DataTypes.STRING,
    field: 'processor_type',
  },

  ExperimentId: {
    type: DataTypes.UUID,
    field: 'experiment_processing_id',
  },
};
