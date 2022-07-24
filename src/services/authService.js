const clientsModel = require('../models/clientsModel');
const throwError = require('../utils/throwError');
const jwtToken = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
  const client = await clientsModel.getClient(email, password);

  if (client.length === 0) return throwError(400, 'Invalid fields');

  return jwtToken.generateJWTToken({ email });
};

module.exports = {
  authenticate,
};