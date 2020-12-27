import Project from '../models/Project';
import Experiment from '../models/Experiment';
import Job from '../models/Job';

export default {
  findAll: ({ offset, limit }) => Project.findAndCountAll({
    limit,
    offset,
  }),

  findPopular: ({ offset, limit }) => Project.findAndCountAll({
    attributes: ['name', 'stars'],
    limit,
    offset,
    order: [
      ['stars', 'DESC']
    ],
  }),

  findOne: async (id) => {
    const project = await Project.findByPk(id, { include: {
      model: Experiment,
      as: 'Experiments'
    }});

    const jobs = await Job.findAll({ where: {
      // projectId: project.gitlabId,
      ref: project.Experiments && project.Experiments[0].name,
    } });

    return {
      project,
      jobs,
    };
  },
};
