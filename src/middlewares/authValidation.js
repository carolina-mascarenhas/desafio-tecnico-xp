const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
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