const express = require('express');
const investmentsController = require('./controllers/investmentsController');
const assetsControler = require('./controllers/assetsControler');
const accountsController = require('./controllers/accountsController');
const listController = require('./controllers/listController');

const routes = express.Router();

routes.use('/investments', investmentsController);
routes.use('/assets', assetsControler);
routes.use('/accounts', accountsController);
routes.use('/list', listController);

module.exports = routes;