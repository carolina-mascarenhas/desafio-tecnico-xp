const accountModel = require('../models/accountsModel');
const assetModel = require('../models/assetsModel');
const clientAssetsModel = require('../models/clientAssetsModel');
const orderModel = require('../models/ordersModel');
const throwError = require('../utils/throwError');

const alterClientAssets = async ({ accountId, assetId, quantity, operation }, account, asset) => {
  const clientAssets = await clientAssetsModel.getByClientAndAssetId(account[0].clientId, assetId);

  if (clientAssets.length !== 0) {
    const newQuantity = clientAssets[0].quantity + quantity;
    const newValue = clientAssets[0].value + (quantity * asset[0].value);
    
    clientAssetsModel.updateClientAsset(newQuantity, newValue, account[0].clientId, assetId);
    return orderModel.createNewOrder(accountId, assetId, quantity, operation);
  }
  
  clientAssetsModel.createClientAssets(
    account[0].clientId, assetId, quantity, asset[0].value * quantity,
  );
  return orderModel.createNewOrder(accountId, assetId, quantity, operation);
};

const createNewPurchaseOrder = async (body) => {
  const account = await accountModel.getAccountByAccountId(body.accountId);

  if (account.length === 0) return throwError(404, 'This account does not exist');

  const asset = await assetModel.getAssetById(body.assetId);

  if (asset.length === 0) return throwError(404, 'This asset does not exist');

  const newBalance = account[0].balance - (body.quantity * asset[0].value);
  const newAssetQuantity = asset[0].quantity - body.quantity;

  if (newBalance < 0) return throwError(404, 'Your balance account is not enough');

  if (newAssetQuantity < 0) return throwError(404, 'There are not enough assets available');

  accountModel.updateAccount(newBalance, body.accountId);
  assetModel.updateAsset(newAssetQuantity, body.assetId);

  return alterClientAssets(body, account, asset);
};

const alterForSale = async ({ accountId, assetId, quantity, operation }, account, clientAssets) => {
  const [asset] = await assetModel.getAssetById(assetId);

  const newBalance = account[0].balance + (quantity * asset.value);
  const newAssetQuantity = asset.quantity + quantity;

  accountModel.updateAccount(newBalance, accountId);
  assetModel.updateAsset(newAssetQuantity, assetId);

  const newQuantity = clientAssets[0].quantity - quantity;
  const newValue = clientAssets[0].value - (quantity * asset.value);

  if (newQuantity === 0) {
    clientAssetsModel.deleteClientAssets(account[0].clientId, assetId);
    return orderModel.createNewOrder(accountId, assetId, quantity, operation);
  }

  clientAssetsModel.updateClientAsset(newQuantity, newValue, account[0].clientId, assetId);
  return orderModel.createNewOrder(accountId, assetId, quantity, operation);
};

const createNewSaleOrder = async (body) => {
  const account = await accountModel.getAccountByAccountId(body.accountId);

  if (account.length === 0) return throwError(404, 'This account does not exist');

  const clientAssets = await clientAssetsModel.getByClientAndAssetId(
    account[0].clientId, body.assetId,
  );
  
  if (clientAssets.length === 0) {
    return throwError(404, 'You are not a client or you do not have this asset');
  }

  const myAssetQuantity = clientAssets[0].quantity;
  const newQuantity = myAssetQuantity - body.quantity;

  if (newQuantity < 0) return throwError(404, 'You do not have enough assets to sell');

  return alterForSale(body, account, clientAssets);
};

module.exports = {
  createNewPurchaseOrder,
  createNewSaleOrder,
};