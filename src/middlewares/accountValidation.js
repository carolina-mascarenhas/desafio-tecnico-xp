const Joi = require('joi');

const schema = Joi.object({
  clientId: Joi.number().integer().required(),
  value: Joi.number().required().min(1),
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