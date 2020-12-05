import express from 'express'
// import { Sequelize } from 'sequelize';
import { Sequelize, Model, DataTypes } from 'sequelize';

import 'babel-polyfill';
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'
import Project from './models/Project';
import projects from './controllers/projects';

const multer = require('multer');
const multipart = multer();

const app = express();
const port = 8001;

const devServerEnabled = true;

if (devServerEnabled) {
  //reload=true:Enable auto reloading when changing JS files or content
  //timeout=1000:Time from disconnecting from server to reconnecting
  config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');

  //Add HMR plugin
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);

  //Enable "webpack-dev-middleware"
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  //Enable "webpack-hot-middleware"
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('./public'));

//API
app.get('/api/projects', projects.listPopular);

app.post('/api/add', multipart.any(), function(req, res) {

  //execute addition(tasizan)
  const firstValue = parseInt(req.body.firstValue);
  const secondValue = parseInt(req.body.secondValue);
  const sum = firstValue + secondValue;

  //return result
  res.json({ sum: sum, firstValue: firstValue, secondValue: secondValue });

});

app.listen(port, () => {
  console.log('Server started on port:' + port);
});
