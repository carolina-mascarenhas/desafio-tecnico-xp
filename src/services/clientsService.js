const db = require('../database/models');

const getClient = () => {
  const query = `SELECT ca.clientId, ca.assetId, cl.qtdAtual,
  cl.valorPago
  FROM FinancialAssets.ClientAssets AS ca
  INNER JOIN FinancialAssets.Clients AS cl
  ON ca.clientId = cl.clientId`;
  return db.sequelize.query(query);
};

const getClientById = async (id) => {
  const query = `SELECT ca.clientId, ca.assetId, cl.qtdAtual, cl.valorPago
  FROM FinancialAssets.ClientAssets AS ca
  INNER JOIN FinancialAssets.Clients AS cl
  ON ca.clientId = cl.clientId
  WHERE ca.clientId = ${id}`;
  const [result] = await db.sequelize.query(query);
  return result;
};

module.exports = {
  getClient,
  getClientById,
};