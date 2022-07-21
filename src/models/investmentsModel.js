const connection = require('./connection');

const getAccount = async (id) => {
  const [account] = await connection.execute('SELECT * FROM Account WHERE accountId = ?', [id]);
  return account;
};

const getAsset = async (id) => {
  const [asset] = await connection.execute('SELECT * FROM Assets WHERE assetId = ?', [id]);
  return asset;
};

const getClient = async (id) => {
  const [client] = await connection.execute('SELECT * FROM Clients WHERE clientId = ?', [id]);
  return client;
};

const createNewOrder = async (accountId, assetId, quantity) => {
  const query = 'INSERT INTO Orders (accountId, assetId, quantity) VALUES (?, ?, ?)';
  const [order] = await connection.execute(query, [accountId, assetId, quantity]);

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

const updateClient = (quantity, id) => {
  const query = 'UPDATE Clients SET quantity = ? WHERE clientId = ?';
  connection.execute(query, [quantity, id]);
};

module.exports = {
  getAccount,
  getAsset,
  getClient,
  createNewOrder,
  updateAccount,
  updateAsset,
  updateClient,
};