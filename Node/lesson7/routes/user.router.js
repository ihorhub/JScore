const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware, userValidatorMiddleware, checkAccessToken } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', userController.getUsersWithCar);
userRouter.post('/', userMiddleware.checkIsRegisterEmail,
    userValidatorMiddleware.joiUserValid,
    checkAccessToken.accessToken, userController.createUser);

userRouter.use('/userId', userValidatorMiddleware.joiUserIdValid, userMiddleware.checkIsUserRegisterId);

userRouter.put('/:userId', userValidatorMiddleware.joiUserUpdateValid,
    checkAccessToken.accessToken, userController.updateUsers);
userRouter.get('/:userId', userController.getUserById);
userRouter.delete('/:userId', checkAccessToken.accessToken, userController.deleteUser);

module.exports = userRouter;
