const connection = require('./connection');

const getAccounts = async (id) => {
  const [accounts] = await connection.execute('SELECT * FROM Account WHERE accountId = ?', [id]);
  return accounts;
};

const getAssets = async (id) => {
  const [assets] = await connection.execute('SELECT * FROM Assets WHERE assetId = ?', [id]);
  return assets;
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

const updateAssets = (quantity, id) => {
  const query = 'UPDATE Assets SET quantity = ? WHERE assetId = ?';
  connection.execute(query, [quantity, id]);
};

module.exports = {
  getAccounts,
  getAssets,
  createNewOrder,
  updateAccount,
  updateAssets,
};