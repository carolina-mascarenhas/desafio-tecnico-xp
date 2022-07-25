const express = require('express');
const middlewares = require('./middlewares');
const investmentsController = require('./controllers/investmentsController');
const assetsControler = require('./controllers/assetsControler');
const accountsController = require('./controllers/accountsController');
const listController = require('./controllers/listController');
const authController = require('./controllers/authController');

const routes = express.Router();

routes.use('/auth', authController);

routes.use(middlewares.tokenValidation);

routes.use('/investments', investmentsController);
routes.use('/assets', assetsControler);
routes.use('/accounts', accountsController);
routes.use('/list', listController);

module.exports = routes;