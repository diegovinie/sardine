import repo from '../repositories/projects';
import repoExp from '../repositories/experiments';

const paginate = (req, { count, rows }) => {
  const {
    query: {
      page,
      per_page,
    },
  } = req;

  return !page ? content : {
    content: rows.map((r) => r.dataValues),
    pagination: {
      page: parseInt(page, 10),
      per_page: parseInt(per_page, 10),
      pages: Math.floor(count / per_page),
      total: count,
    },
  };
};

export default {
  listProjects: async (req, res) => {
    const {
      popular,
      page,
      per_page: limit,
    } = req.query;

    const offset = limit && page * limit;

    if (popular) {
      const populars = await repo.findPopular({ offset, limit });

      return res.json(paginate(req, populars));
    }

    const projects = await repo.findAll({ offset, limit });

    return res.json(paginate(req, projects));
  },

  getProject: async (req, res) => {
    const {
      id,
    } = req.params;

    const project = await repo.findOne(id);

    return res.json(project);
  },

  getExperiment: async (req, res) => {
    const {
      eid,
    } = req.params;

    const project = await repoExp.findOne(eid);

    return res.json(project);
  },

  getProjectExperiments: async (req, res) => {
    const {
      id,
    } = req.params;

    const project = await repo.findOne(id);

    const experiments = await project.getExperiments({ include: 'ProcessorInstance'});
    // const experiments = await project.getExperiments();

    return res.json(experiments);
  },
};
