const express = require('express');
const assetsService = require('../services/assetsService');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const getAssets = await assetsService.getAssets();
  res.status(200).json(getAssets);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const getAssetsById = await assetsService.getAssetsById(id);
  res.status(200).json(getAssetsById);
});

module.exports = routes;