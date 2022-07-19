const express = require('express');
const AssetsService = require('../services/assetsService');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const getAll = await AssetsService.getAll();
  res.status(200).json(getAll);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [getById] = await AssetsService.getById(id);
  res.status(200).json(getById);
});

module.exports = routes;