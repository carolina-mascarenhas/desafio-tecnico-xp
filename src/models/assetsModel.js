const connection = require('./connection');

const getAssets = async () => {
  const [assets] = await connection.execute('SELECT * FROM Assets');
  return assets;
};

const getAssetById = async (id) => {
  const [assetById] = await connection.execute('SELECT * FROM Assets WHERE assetId = ?', [id]);
  return assetById;
};

const updateAsset = (quantity, id) => {
  const query = 'UPDATE Assets SET quantity = ? WHERE assetId = ?';
  connection.execute(query, [quantity, id]);
};

module.exports = {
  getAssets,
  getAssetById,
  updateAsset,
};