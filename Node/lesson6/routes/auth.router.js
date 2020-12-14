const { Router } = require('express');
const { checkPasswordHash } = require('../middlewares');
const { userController } = require('../controllers');

const authRouter = Router();

authRouter.post('/', checkPasswordHash.findUserParam, userController.createUser);

module.exports = authRouter;
