const jwt = require('jsonwebtoken');
const throwError = require('../utils/throwError');

const TOKEN_SECRET = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(token, TOKEN_SECRET);
    return next();
  } catch (err) {
    throwError(401, 'Expired or invalid token');
  }
};

module.exports = validateToken;