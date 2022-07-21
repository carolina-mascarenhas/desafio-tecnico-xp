const express = require('express');
const investmentsService = require('../services/investmentsService');

const routes = express.Router();

routes.post('/buy', async (req, res) => {
  const createNewOrder = await investmentsService.createNewOrder(req.body);
  res.status(201).json({
    message: `Congratulations, purchase order number ${createNewOrder} was successfully processed`,
  });
});

module.exports = routes;