const express = require('express');
const investmentsController = require('./controllers/investmentsController');

const routes = express.Router();

routes.use('/investments', investmentsController);

module.exports = routes;