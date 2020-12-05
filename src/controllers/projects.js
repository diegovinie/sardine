import repo from '../repositories/projects';

export default {
  listPopular: async (req, res) => {
    const projects = await repo.findPopular();
    
    // console.log(req);
    // console.log('yea');
    return res.json(projects);
  },
};
