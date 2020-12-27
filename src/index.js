import 'babel-polyfill';
import express from 'express'
import bootstrap from './bootstrap';
import Project from './models/Project';
import projects from './controllers/projects';
import config from './config';
import sequelize, { gitlab } from './connection';

const port = config.port;

const multer = require('multer');
const multipart = multer();

const app = express();

// webpack init
bootstrap(app);

async function test () {
  console.log('before');
  const a = await sequelize.query('SELECT username from account LIMIT 2');
  console.log(a);
  const g = await gitlab.query('SELECT email from users LIMIT 2');
  console.log(g);
  console.log('after');
}

console.log('enterint');
test();

app.use(express.static('./public'));

//API
app.get('/api/projects', projects.listProjects);
app.get('/api/projects/:id', projects.getProject);
app.get('/api/projects/:id/experiments', projects.getProjectExperiments);

app.listen(port, () => {
  console.log('Server started on port:' + port);
});
