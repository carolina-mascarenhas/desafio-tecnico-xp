const accountsModel = require('../models/accountsModel');

const getAccounts = () => accountsModel.getAccounts();

const getAccountById = async (id) => {
  const accountById = await accountsModel.getAccountByClientId(id);

  if (accountById.length === 0) {
    const error = new Error('Account does not exist');
    error.status = 404;
    throw error;
  }

  return {
    clientId: accountById[0].clientId,
    balance: accountById[0].balance,
  };
};

const createDeposit = async ({ clientId, value }) => {
  const account = await accountsModel.getAccountByClientId(clientId);

  if (account.length === 0) {
    const error = new Error('This client does not exist');
    error.status = 404;
    throw (error);
  }

  const newBalance = account[0].balance + value;

  accountsModel.createDeposit(value, newBalance, clientId);
  return account[0].accountId;
};

const createWithdrawal = async ({ clientId, value }) => {
  const account = await accountsModel.getAccountByClientId(clientId);

  if (account.length === 0) {
    const error = new Error('This client does not exist');
    error.status = 404;
    throw (error);
  }

  const newBalance = account[0].balance - value;

  if (newBalance < 0) {
    const error = new Error('Amount to be withdrawn cannot be greater than the account balance');
    error.status = 404;
    throw (error);
  }

  accountsModel.createWithdrawal(value, newBalance, clientId);
  return account[0].accountId;
};

module.exports = {
  getAccounts,
  getAccountById,
  createDeposit,
  createWithdrawal,
};