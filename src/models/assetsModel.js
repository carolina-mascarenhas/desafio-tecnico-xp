const connection = require('./connection');

const getAssets = async () => {
  const [assets] = await connection.execute('SELECT * FROM Assets');
  return assets;
};

const getAssetById = async (id) => {
  const [assetById] = await connection.execute('SELECT * FROM Assets WHERE assetId = ?', [id]);
  return assetById;
};

const getClients = async () => {
  const query = `SELECT ca.clientId, ca.assetId, ord.quantity, ca.value
  FROM ClientAssets AS ca
  INNER JOIN Orders AS ord
  ON ca.assetId = ord.assetId`;
  const [clients] = await connection.execute(query);
  return clients;
};

const getClientById = async (id) => {
  const query = `SELECT ca.clientId, ca.assetId, ord.quantity, ca.value
  FROM ClientAssets AS ca
  INNER JOIN Orders AS ord
  ON ca.assetId = ord.assetId
  WHERE ca.clientId = ?`;
  const [clientById] = await connection.execute(query, [id]);
  return clientById;
};

module.exports = {
  getAssets,
  getAssetById,
  getClients,
  getClientById,
};