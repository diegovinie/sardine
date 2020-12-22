import Project from '../models/Project';

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
};
