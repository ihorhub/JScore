const jwt = require('jsonwebtoken');
const { REFRESH_TOKEN_SECRET } = require('../configs/config');
const { ErrorHandler, errors } = require('../error');
const { oAuthService } = require('../services');
const { AUTHORIZATION } = require('../constans/constans');

module.exports = {
    refresh_token: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);

            if (!refresh_token) {
                throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
            }

            jwt.verify(refresh_token, REFRESH_TOKEN_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
                }
            });

            const userWithToken = await oAuthService.getTokenWithUserByParams({ refresh_token });

            if (!userWithToken) {
                throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
            }

            if (userWithToken.id !== +req.params.userId) {
                throw new ErrorHandler(errors.PERMISSION_DENIED.message, errors.PERMISSION_DENIED.code);
            }

            req.user = userWithToken;

            next();
        } catch (e) {
            next(e);
        }
    };
}
