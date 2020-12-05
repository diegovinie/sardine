import 'babel-polyfill';
import express from 'express'
import bootstrap from './bootstrap';
import Project from './models/Project';
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
app.get('/api/projects', projects.listPopular);

app.listen(port, () => {
  console.log('Server started on port:' + port);
});
