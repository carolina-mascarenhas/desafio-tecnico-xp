const connection = require('./connection');

const createNewOrder = async (accountId, assetId, quantity, operation) => {
  const query = 'INSERT INTO Orders (accountId, assetId, quantity, operation) VALUES (?, ?, ?, ?)';
  const [order] = await connection.execute(query, [accountId, assetId, quantity, operation]);

  return order.insertId;
};

module.exports = {
  createNewOrder,
};