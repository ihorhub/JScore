const { Router } = require('express');
const {
    userMiddleware, checkPasswordHash, checkAccessToken, checkRefreshToken
} = require('../middlewares');
const { authController, userController } = require('../controllers');

const authRouter = Router();

authRouter.post('/', checkPasswordHash.findUserParam, checkAccessToken.accessToken, authController.login);
authRouter.post('/refresh', userMiddleware.checkIsUserRegisterId, checkRefreshToken.refresh_token, authController.newTokenPair);
authRouter.get('/logout', userMiddleware.checkIsUserRegisterId, authController.logout);

module.exports = authRouter;
