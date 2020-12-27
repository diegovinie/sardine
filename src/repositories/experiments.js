import Experiment from '../models/Experiment';
import GlJob from '../models/GlJob';

export default {
  findAllFromProject: async ({ offset, limit }) => {
    const exps = await Experiment.findAndCountAll({
      limit,
      offset,
    });

    return exps;
  },

  findOne: async (id) => {
    const experiment = await Experiment.findByPk(id);

    experiment.jobs = await GlJob.findAll({
      where: {
        ref: experiment.name,
      },
    });

    return experiment;
  }
};
