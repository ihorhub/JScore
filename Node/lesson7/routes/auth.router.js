const { Router } = require('express');
const { checkPasswordHash, checkAccessToken } = require('../middlewares');
const { authController } = require('../controllers');

const authRouter = Router();

authRouter.post('/', checkPasswordHash.findUserParam, checkAccessToken.accessToken, authController.login);

module.exports = authRouter;
