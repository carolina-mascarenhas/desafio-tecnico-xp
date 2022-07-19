const { Asset } = require('../database/models');

const getAll = () => {
  const allAssets = Asset.findAll();
  return allAssets;
};

const getById = (id) => {
  const assetById = Asset.findAll({
    attributes: { exclude: ['asset'] },
    where: {
      id,
    },
  });
  return assetById;
};

module.exports = {
  getAll,
  getById,
};