import Project from '../models/Project';
import Experiment from '../models/Experiment';
import GlProject from '../models/GlProject';

export default {
  findAll: async ({ offset, limit }) => {
    const projectsPag = await Project.findAndCountAll({
      limit,
      offset,
    });

    // for (let project of projectsPag.rows) {
    //   project.gitlabProject = await GlProject.findByPk(project.gitlabId);
    // }

    // optimized
    const glProjects = await GlProject.findAll({
      where: {
        id: projectsPag.rows.map((p) => p.gitlabId),
      },
    });

    for (let i = 0; projectsPag.rows.length > i; i++) {
      projectsPag.rows[i].gitlabProject = glProjects[i];
    }

    return projectsPag;
  },

  findPopular: async ({ offset, limit }) => {
    const projects = await Project.findAndCountAll({
      attributes: ['name', 'stars'],
      limit,
      offset,
      order: [
        ['stars', 'DESC']
      ],
    });


    return projects;
  },

  findOne: async (id) => {
    const project = await Project.findByPk(id, { include: {
      model: Experiment,
      as: 'Experiments'
    }});

    project.gitlabProject = await GlProject.findByPk(project.gitlabId);

    return project;
  },
};
