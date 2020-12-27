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

  status: {
    type: DataTypes.STRING,
    field: 'status',
  },

  number: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'number',
  },

  dataProjectId: {
    type: DataTypes.STRING,
    field: 'data_project_id',
  },

  ProcessorInstanceId: {
    type: DataTypes.UUID,
    allowNull: true,
    field: 'experiment_processing_id',
  },

  jobs: {
    type: DataTypes.VIRTUAL,
    // set(jobs) {
    //   this.setDataValue('jobs', jobs);
    // }
  }
};

// id
// data_project_id
// json_blob
// source_branch
// status
// target_branch
// experiment_processing_id
// datapipeline_instance_id
// name
// slug
// gitlab_commit_sha
// gitlab_commited_at
// gitlab_created_at
// gitlab_finished_at
// gitlab_id
// gitlab_ref
// gitlab_hash
// gitlab_started_at
// gitlab_updated_at
// number
