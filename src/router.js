const express = require('express');
const clientsController = require('./controllers/clientsController');
const assetsController = require('./controllers/assetsController');

const routes = express.Router();

routes.use('/clients', clientsController);
routes.use('/assets', assetsController);

module.exports = routes;