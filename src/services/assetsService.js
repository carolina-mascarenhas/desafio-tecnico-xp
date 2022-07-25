const assetsModel = require('../models/assetsModel');
const clientsAssetsModel = require('../models/clientAssetsModel');

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

const getClients = () => clientsAssetsModel.getAll();

const getClientById = async (id) => {
  const clientById = await clientsAssetsModel.getByClientId(id);

  if (clientById.length === 0) {
    const error = new Error('This client does not exist or does not have any assets yet');
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