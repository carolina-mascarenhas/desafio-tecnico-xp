const express = require('express');
const clientsController = require('./controllers/clientsController');

const routes = express.Router();

routes.use('/clients', clientsController);

module.exports = routes;