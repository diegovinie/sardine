import Project from '../models/Project';
import Experiment from '../models/Experiment';

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

    return project;
  },
};
