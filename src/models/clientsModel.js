const connection = require('./connection');

const getClient = async (email, password) => {
  const query = 'SELECT * FROM Clients WHERE email = ? AND password = ?';
  const [client] = await connection.execute(query, [email, password]);
  return client;
};

module.exports = {
  getClient,
};