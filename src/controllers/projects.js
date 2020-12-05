import repo from '../repositories/projects';

export default {
  listPopular: async (req, res) => {
    const projects = await repo.findPopular();

    return res.json(projects);
  },
};
