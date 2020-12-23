const { ErrorHandler, errors: { NOT_VALID_BODY, NOT_VALID_ID } } = require('../error');
const { joiCarIdValid, joiCarUpdateValidator, joiCarValid } = require('../validators');

module.exports = {

    joiCarIdValid: (req, res, next) => {
        try {
            const { userId } = req.params;
            const { error } = joiCarIdValid.validate(userId);

            if (error) throw new ErrorHandler(error.details[0].message, NOT_VALID_ID);

            next();
        } catch (e) {
            next(e);
        }
    },
    joiCarValid: (req, res, next) => {
        try {
            const { error } = joiCarValid.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, NOT_VALID_BODY);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    joiCarUpdateValidator: (req, res, next) => {
        try {
            const { error } = joiCarUpdateValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, NOT_VALID_BODY);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
