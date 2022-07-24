const Joi = require('joi');

const schema = Joi.object({
  accountId: Joi.number().integer().required(),
  assetId: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
});

const validation = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (!error) {
    return next();
  }

  const [message] = error.details.map((e) => e.message);
  return res.status(400).json({ message });
};

module.exports = validation;