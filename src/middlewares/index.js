const error = require('./error');
const investmentsValidation = require('./investmentsValidation');
const accountValidation = require('./accountValidation');
const tokenValidation = require('./validateToken');
const authValidation = require('./authValidation');

module.exports = {
  error,
  investmentsValidation,
  accountValidation,
  tokenValidation,
  authValidation,
};
