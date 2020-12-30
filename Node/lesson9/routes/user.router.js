const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware, userValidatorMiddleware, checkAccessToken,fileMiddlewares } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', userController.getUsersWithCar);
userRouter.post('/',
    userMiddleware.checkIsRegisterEmail,
    userValidatorMiddleware.joiUserValid,
    checkAccessToken.accessToken,
    fileMiddlewares.checkFile,
    fileMiddlewares.checkAvatar,
    userController.createUser);

userRouter.use('/:userId', userValidatorMiddleware.joiUserIdValid, userMiddleware.checkIsUserRegisterId);

userRouter.put('/:userId', userValidatorMiddleware.joiUserUpdateValid,
    checkAccessToken.accessToken, userController.updateUsers);
userRouter.get('/:userId', userController.getUserById);
userRouter.delete('/:userId', checkAccessToken.accessToken, userController.deleteUser);

module.exports = userRouter;


// в мене хрестини, бігаю від неділі... от сьогодні пару годин знайшов час,
// хоч попередню і сьогоднішню лекцію подивитись...
// хочу то все в повній мірі зрозуміти... але як є то є.. червоне то червоне..
