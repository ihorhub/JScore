const userService = require('../services/user.service');
const db = require('../dataBase').getInstance();
const { ErrorHandler, errors: { NOT_VALID_BODY,UNAUTHORIZED_BODY } } = require('../error');

module.exports = {

    checkIsRegisterEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await userService.findUsersWithCars({email},1);

            if (user) {
                throw new ErrorHandler(UNAUTHORIZED_BODY.message,UNAUTHORIZED_BODY.code);
            }

            next();
        } catch (e) {
           next(e);
        }
    },

    checkIsRegisterId: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user =  await userService.findUserById(userId);

            if (!user) {
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }
            req.user = user

            next();
        } catch (e) {
            next(e);
        }
    },
};
