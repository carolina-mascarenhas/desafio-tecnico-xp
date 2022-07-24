const express = require('express');
const authService = require('../services/authService');

const routes = express.Router();

routes.post('/', async (req, res) => {
  const token = await authService.authenticate(req.body);
  res.status(200).json({ token });
});

module.exports = routes;