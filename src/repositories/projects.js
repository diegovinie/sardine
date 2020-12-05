import Project from '../models/Project';

export default {
  findPopular: () => Project.findAll({
    attributes: ['name', 'stars'],
    limit: 5,
    order: [
      ['stars', 'DESC']
    ],
  }),
};
