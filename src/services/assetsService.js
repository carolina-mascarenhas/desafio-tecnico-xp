const { Asset } = require('../database/models');

const getAssets = () => Asset.findAll({ attributes: { exclude: ['asset'] } });

const getAssetsById = (id) => Asset.findAll({
  attributes: { exclude: ['asset'] },
  where: { assetId: id },
});

module.exports = {
  getAssets,
  getAssetsById,
};