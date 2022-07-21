const express = require('express');
const investmentsController = require('./controllers/investmentsController');
const assetsControler = require('./controllers/assetsControler');

const routes = express.Router();

routes.use('/investments', investmentsController);
routes.use('/assets', assetsControler);

module.exports = routes;