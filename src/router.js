const express = require('express');
const assetsController = require('./controllers/assetsController');

const routes = express.Router();

routes.use('/assets', assetsController);

module.exports = routes;