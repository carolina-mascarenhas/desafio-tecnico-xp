const express = require('express');
const investmentsService = require('../services/investmentsService');

const routes = express.Router();

routes.post('/buy', async (req, res) => {
  const requestBody = req.body;
  requestBody.operation = 'buy';
  const createNewOrder = await investmentsService.createNewPurchaseOrder(req.body);
  res.status(201).json({
    message: `Congratulations, purchase order number ${createNewOrder} was successfully processed`,
  });
});

routes.post('/sell', async (req, res) => {
  const requestBody = req.body;
  requestBody.operation = 'sell';
  const createNewOrder = await investmentsService.createNewSaleOrder(req.body);
  res.status(201).json({
    message: `Congratulations, sale order number ${createNewOrder} was successfully processed`,
  });
});

module.exports = routes;