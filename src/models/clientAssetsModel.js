const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM ClientAssets';
  const [clientAssets] = await connection.execute(query);
  return clientAssets;
};

const getByClientId = async (id) => {
  const [clientAssets] = await connection.execute(
    'SELECT * FROM ClientAssets WHERE clientId = ?', [id],
  );
  return clientAssets;
};

const getByClientAndAssetId = async (clientId, assetId) => {
  const [clientAssets] = await connection.execute(
    'SELECT * FROM ClientAssets WHERE clientId = ? AND assetId = ?', [clientId, assetId],
  );
  return clientAssets;
};

const createClientAssets = (clientId, assetId, quantity, value) => {
  const query = 'INSERT INTO ClientAssets (clientId, assetId, quantity, value) VALUES (?, ?, ?, ?)';
  connection.execute(query, [clientId, assetId, quantity, value]);
};

const updateClientAsset = (quantity, value, clientId, assetId) => {
  const query = `UPDATE ClientAssets SET quantity = ?, value = ?
  WHERE clientId = ? AND assetId = ?`;
  connection.execute(query, [quantity, value, clientId, assetId]);
};

const deleteClientAssets = (clientId, assetId) => {
  const query = 'DELETE FROM ClientAssets WHERE clientId = ? AND assetId = ?';
  connection.execute(query, [clientId, assetId]);
};

module.exports = {
  getAll,
  getByClientId,
  getByClientAndAssetId,
  createClientAssets,
  updateClientAsset,
  deleteClientAssets,
};