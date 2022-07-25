const express = require('express');
const listService = require('../services/listService');

const routes = express.Router();

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const allAssets = await listService.getAllAssets();
  const myAssets = await listService.getAssetsByClient(id);
  res.status(200).json({ allAssets, myAssets });
});

module.exports = routes;
