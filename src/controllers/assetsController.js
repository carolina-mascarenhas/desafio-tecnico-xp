const express = require('express');
const AssetsService = require('../services/assetsService');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const getAll = await AssetsService.getAll();
  res.status(200).json(getAll);
});

module.exports = routes;