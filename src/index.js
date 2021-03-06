import 'babel-polyfill';
import express from 'express'
import bootstrap from './bootstrap';
import Project from './models/Project';
import general from './controllers/general';
import projects from './controllers/projects';
import config from './config';

const port = config.port;

const multer = require('multer');
const multipart = multer();

const app = express();

// webpack init
bootstrap(app);

app.use(express.static('./public'));

//API
app.get('/api/check', general.check);
app.get('/api/projects', projects.listProjects);
app.get('/api/projects/:id', projects.getProject);
app.get('/api/projects/:id/experiments', projects.getProjectExperiments);
app.get('/api/projects/:id/experiments/:eid', projects.getExperiment);

app.listen(port, () => {
  console.log('Server started on port:' + port);
});
