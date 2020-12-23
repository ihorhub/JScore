const { ErrorHandler, errors: { NOT_VALID_BODY, NOT_VALID_ID, WRONG_EMAIL_OR_PASS } } = require('../error');
const userService = require('../services/user.service');
const db = require('../dataBase').getInstance();
const { joiUserUpdateValidator, joiUserIdValidator, joiUserValidator } = require('../validators');

module.exports = {
    joiUserIdValid: (req, res, next) => {
        try {
            const { userId } = req.params;
            const { error } = joiUserIdValidator.validate(userId);

            if (error) throw new ErrorHandler(error.details[0].message, WRONG_EMAIL_OR_PASS);

            next();
        } catch (e) {
            next(e);
        }
    },
    joiUserValid: (req, res, next) => {
        try {
            const { error } = joiUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, WRONG_EMAIL_OR_PASS);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    joiUserUpdateValid: (req, res, next) => {
        try {
            const { error } = joiUserUpdateValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, WRONG_EMAIL_OR_PASS);
            }

            next();
        } catch (e) {
            next(e);
        }
    }

};
