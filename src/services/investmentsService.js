/* eslint-disable max-lines-per-function */
const investmentsModel = require('../models/investmentsModel');

const createNewOrder = async ({ accountId, assetId, quantity }) => {
  const [account] = await investmentsModel.getAccount(accountId);

  const [asset] = await investmentsModel.getAsset(assetId);

  const [client] = await investmentsModel.getClient(account.clientId);

  const newBalance = account.balance - (quantity * asset.value);
  const newAssetQuantity = asset.quantity - quantity;
  const newClientQuantity = client.quantity + quantity;

  if (newBalance < 0) {
    const error = new Error('Your balance account is not enought');
    error.status = 404;
    throw error;
  }

  if (newAssetQuantity < 0) {
    const error = new Error('There are not enought assets available');
    error.status = 404;
    throw error;
  }

  investmentsModel.updateAccount(newBalance, accountId);
  investmentsModel.updateAsset(newAssetQuantity, assetId);
  investmentsModel.updateClient(newClientQuantity, account.clientId);
  return investmentsModel.createNewOrder(accountId, assetId, quantity);
};

module.exports = {
  createNewOrder,
};