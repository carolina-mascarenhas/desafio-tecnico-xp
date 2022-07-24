const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign({ data: payload }, TOKEN_SECRET, jwtConfig);

module.exports = {
  generateJWTToken,
};
