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
  const query = 'SELECT * FROM ClientAssets';
  const [clients] = await connection.execute(query);
  return clients;
};

const getClientById = async (id) => {
  const query = 'SELECT * FROM ClientAssets WHERE clientId = ?';
  const [clientById] = await connection.execute(query, [id]);
  return clientById;
};

module.exports = {
  getAssets,
  getAssetById,
  getClients,
  getClientById,
};