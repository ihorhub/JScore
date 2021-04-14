const Joi = require('joi');
const { EMAIL, PASSWORD } = require('../../configs/regexp');
const girlSubScheme = Joi.array().items(
  Joi.object({
    name: Joi.string().alphanum().max(20)
  })
);

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50).required(),
    email: Joi.string().regex(EMAIL).required(),
    password: Joi.string().regex(PASSWORD).required(),
     girls: girlSubScheme.optional().when('car', { is: true, then: Joi.required() })
});
