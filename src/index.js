import express from 'express'
import { Sequelize } from 'sequelize';
import 'babel-polyfill';
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'

const multer = require('multer');
const multipart = multer();

const sequelize = new Sequelize('postgres://mlreef:password@ec2-18-157-161-187.eu-central-1.compute.amazonaws.com:6000/mlreef_backend') // Example for postgres

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
app.post('/api/add', multipart.any(), function(req, res) {

  //execute addition(tasizan)
  const firstValue = parseInt(req.body.firstValue);
  const secondValue = parseInt(req.body.secondValue);
  const sum = firstValue + secondValue;

  //return result
  res.json({ sum: sum, firstValue: firstValue, secondValue: secondValue });

});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDb();

app.listen(port, () => {
  console.log('Server started on port:' + port);
});
