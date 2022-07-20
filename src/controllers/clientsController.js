const express = require('express');
const clientsService = require('../services/clientsService');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const [getClient] = await clientsService.getClient();
  res.status(200).json(getClient);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const getClientById = await clientsService.getClientById(id);
  res.status(200).json(getClientById);
});

module.exports = routes;