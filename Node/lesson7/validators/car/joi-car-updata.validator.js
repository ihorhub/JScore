const Joi = require('joi');

module.exports = Joi.object({
    price: Joi.number().positive(),
    model: Joi.string().alphanum(),
    year: Joi.number().min(1870),
    user_id: Joi.number().integer()
});
