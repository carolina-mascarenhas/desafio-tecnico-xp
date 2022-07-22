const investmentsModel = require('../models/investmentsModel');

const alterClientAssets = async ({ accountId, assetId, quantity, operation }, account, asset) => {
  const clientAssets = await investmentsModel.getClientAssets(account.clientId, assetId);

  if (clientAssets.length !== 0) {
    const newQuantity = clientAssets[0].quantity + quantity;
    const newValue = clientAssets[0].value + (quantity * asset.value);
    
    investmentsModel.updateClientAsset(newQuantity, newValue, account.clientId, assetId);
    return investmentsModel.createNewOrder(accountId, assetId, quantity, operation);
  }
  
  investmentsModel.createClientAssets(account.clientId, assetId, quantity, asset.value * quantity);

  return investmentsModel.createNewOrder(accountId, assetId, quantity, operation);
};

const createNewPurchaseOrder = async (body) => {
  const [account] = await investmentsModel.getAccount(body.accountId);

  const [asset] = await investmentsModel.getAsset(body.assetId);

  const newBalance = account.balance - (body.quantity * asset.value);
  const newAssetQuantity = asset.quantity - body.quantity;

  if (newBalance < 0) {
    const error = new Error('Your balance account is not enough');
    error.status = 404;
    throw error;
  }

  if (newAssetQuantity < 0) {
    const error = new Error('There are not enough assets available');
    error.status = 404;
    throw error;
  }

  investmentsModel.updateAccount(newBalance, body.accountId);
  investmentsModel.updateAsset(newAssetQuantity, body.assetId);

  return alterClientAssets(body, account, asset);
};

const alterForSale = async ({ accountId, assetId, quantity, operation }, account, clientAssets) => {
  const [asset] = await investmentsModel.getAsset(assetId);

  const newBalance = account.balance + (quantity * asset.value);
  const newAssetQuantity = asset.quantity + quantity;

  investmentsModel.updateAccount(newBalance, accountId);
  investmentsModel.updateAsset(newAssetQuantity, assetId);

  const newQuantity = clientAssets[0].quantity - quantity;
  const newValue = clientAssets[0].value - (quantity * asset.value);

  if (newQuantity === 0) {
    investmentsModel.deleteClientAssets(account.clientId, assetId);
    return investmentsModel.createNewOrder(accountId, assetId, quantity, operation);
  }

  investmentsModel.updateClientAsset(newQuantity, newValue, account.clientId, assetId);
  return investmentsModel.createNewOrder(accountId, assetId, quantity, operation);
};

const createNewSaleOrder = async (body) => {
  const [account] = await investmentsModel.getAccount(body.accountId);

  const clientAssets = await investmentsModel.getClientAssets(account.clientId, body.assetId);
  
  if (clientAssets.length === 0) {
    const error = new Error('You are not a client or you do not have this asset');
    error.status = 404;
    throw error;
  }

  const myAssetQuantity = clientAssets[0].quantity;
  const newQuantity = myAssetQuantity - body.quantity;

  if (newQuantity < 0) {
    const error = new Error('You do not have enough assets to sell');
    error.status = 404;
    throw error;
  }

  return alterForSale(body, account, clientAssets);
};

module.exports = {
  createNewPurchaseOrder,
  createNewSaleOrder,
};