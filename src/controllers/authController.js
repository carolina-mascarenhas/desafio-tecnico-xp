const express = require('express');
const authService = require('../services/authService');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.use(middlewares.authValidation);

routes.post('/', async (req, res) => {
  const token = await authService.authenticate(req.body);
  res.status(200).json({ token });
});

module.exports = routes;