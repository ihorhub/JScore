const Joi = require('joi');

module.exports = Joi.object({
    price: Joi.number().positive().required(),
    model: Joi.string().alphanum().required(),
    year: Joi.number().min(1870).required(),
    user_id: Joi.number().integer()
});
