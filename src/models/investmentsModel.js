const connection = require('./connection');

const getAccount = async (id) => {
  const [account] = await connection.execute('SELECT * FROM Account WHERE accountId = ?', [id]);
  return account;
};

const getAsset = async (id) => {
  const [asset] = await connection.execute('SELECT * FROM Assets WHERE assetId = ?', [id]);
  return asset;
};

const getClientAssets = async (clientId, assetId) => {
  const [clientAssets] = await connection.execute(
    'SELECT * FROM ClientAssets WHERE clientId = ? AND assetId = ?', [clientId, assetId],
  );
  return clientAssets;
};

const createClientAssets = (clientId, assetId, quantity, value) => {
  const query = 'INSERT INTO ClientAssets (clientId, assetId, quantity, value) VALUES (?, ?, ?, ?)';
  connection.execute(query, [clientId, assetId, quantity, value]);
};

const createNewOrder = async (accountId, assetId, quantity, operation) => {
  const query = 'INSERT INTO Orders (accountId, assetId, quantity, operation) VALUES (?, ?, ?, ?)';
  const [order] = await connection.execute(query, [accountId, assetId, quantity, operation]);

  return order.insertId;
};

const updateAccount = (balance, id) => {
  const query = 'UPDATE Account SET balance = ? WHERE accountId = ?';
  connection.execute(query, [balance, id]);
};

const updateAsset = (quantity, id) => {
  const query = 'UPDATE Assets SET quantity = ? WHERE assetId = ?';
  connection.execute(query, [quantity, id]);
};

const updateClientAsset = (quantity, value, clientId, assetId) => {
  const query = `UPDATE ClientAssets SET quantity = ?, value = ?
  WHERE clientId = ? AND assetId = ?`;
  connection.execute(query, [quantity, value, clientId, assetId]);
};

module.exports = {
  getAccount,
  getAsset,
  getClientAssets,
  createClientAssets,
  createNewOrder,
  updateAccount,
  updateAsset,
  updateClientAsset,
};