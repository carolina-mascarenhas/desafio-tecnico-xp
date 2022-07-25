const express = require('express');
const accountsService = require('../services/accountsService');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const accounts = await accountsService.getAccounts();
  res.status(200).json(accounts);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const accountByClientId = await accountsService.getAccountById(id);
  res.status(200).json(accountByClientId);
});

routes.use(middlewares.accountValidation);

routes.post('/deposit', async (req, res) => {
  const deposit = await accountsService.createDeposit(req.body);
  res.status(201).json({
    message: `Deposit of ${req.body.value} successfully made in accountId ${deposit}`,
  });
});

routes.post('/withdrawal', async (req, res) => {
  const withdrawal = await accountsService.createWithdrawal(req.body);
  res.status(201).json({
    message: `Withdrawal of ${req.body.value} successfully made in accountId ${withdrawal}`,
  });
});

module.exports = routes;
