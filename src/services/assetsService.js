const { Asset } = require('../database/models');

const getAll = () => {
  const allAssets = Asset.findAll();
  return allAssets;
};

module.exports = {
  getAll,
};