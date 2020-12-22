import { DataTypes } from 'sequelize';

export default {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  dataProjectId: {
    type: DataTypes.STRING,
    field: 'data_project_id',
  },

  jsonBlob: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'json_blob',
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
