const Joi = require('joi');
const { EMAIL, PASSWORD } = require('../../configs/regexp');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50),
    email: Joi.string().regex(EMAIL),


});
