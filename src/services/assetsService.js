const assetsModel = require('../models/assetsModel');

const getAssets = () => assetsModel.getAssets();

const getAssetById = async (id) => {
  const assetById = await assetsModel.getAssetById(id);

  if (assetById.length === 0) {
    const error = new Error('This asset does not exist');
    error.status = 404;
    throw (error);
  }

  return assetById;
};

const getClients = () => assetsModel.getClients();

const getClientById = async (id) => {
  const clientById = await assetsModel.getClientById(id);

  if (clientById.length === 0) {
    const error = new Error('This client does not exist');
    error.status = 404;
    throw (error);
  }

  return clientById;
};

module.exports = {
  getAssets,
  getAssetById,
  getClients,
  getClientById,
};