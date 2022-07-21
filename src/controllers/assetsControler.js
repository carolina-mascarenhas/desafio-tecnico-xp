const express = require('express');
const assetsService = require('../services/assetsService');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const assets = await assetsService.getAssets();
  res.status(200).json(assets);
});

routes.get('/clients', async (_req, res) => {
  const clients = await assetsService.getClients();
  res.status(200).json(clients);
});

routes.get('/clients/:id', async (req, res) => {
  const { id } = req.params;
  const clientById = await assetsService.getClientById(id);
  res.status(200).json(clientById);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [assetById] = await assetsService.getAssetById(id);
  res.status(200).json(assetById);
});

module.exports = routes;