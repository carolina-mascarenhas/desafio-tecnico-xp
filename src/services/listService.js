const assetsModel = require('../models/assetsModel');
const clientAssetsModel = require('../models/clientAssetsModel');

const getAllAssets = () => assetsModel.getAssets();

const getAssetsByClient = (id) => clientAssetsModel.getByClientId(id);

module.exports = {
  getAllAssets,
  getAssetsByClient,
};