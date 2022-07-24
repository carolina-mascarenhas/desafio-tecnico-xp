const connection = require('./connection');

const getAccounts = async () => {
  const [accounts] = await connection.execute(
    'SELECT clientId, balance FROM Account ORDER BY clientId',
  );
  return accounts;
};

const getAccountByClientId = async (id) => {
  const [byClientId] = await connection.execute('SELECT * FROM Account WHERE clientId = ?', [id]);
  return byClientId;
};

const getAccountByAccountId = async (id) => {
  const [byAccountId] = await connection.execute('SELECT * FROM Account WHERE accountId = ?', [id]);
  return byAccountId;
};

const createDeposit = (deposit, balance, clientId) => {
  const query = 'UPDATE Account SET deposit = ?, balance = ? WHERE clientId = ?';
  connection.execute(query, [deposit, balance, clientId]);
};

const createWithdrawal = (withdrawal, balance, clientId) => {
  const query = 'UPDATE Account SET withdrawal = ?, balance = ? WHERE clientId = ?';
  connection.execute(query, [withdrawal, balance, clientId]);
};

const updateAccount = (balance, id) => {
  const query = 'UPDATE Account SET balance = ? WHERE accountId = ?';
  connection.execute(query, [balance, id]);
};

module.exports = {
  getAccounts,
  getAccountByClientId,
  getAccountByAccountId,
  createDeposit,
  createWithdrawal,
  updateAccount,
};