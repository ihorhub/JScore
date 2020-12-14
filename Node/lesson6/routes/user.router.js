const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware, validationMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', userController.getUsersWithCar);
userRouter.post('/', userMiddleware.checkIsRegisterEmail, validationMiddleware.joiUserValid, userController.createUser);

userRouter.use('/userId', validationMiddleware.joiUserIdValid, userMiddleware.checkIsRegisterId);

userRouter.put('/:userId', validationMiddleware.joiUserUpdateValid, userController.updateUsers);
userRouter.get('/:userId', userController.getUserById);
userRouter.delete('/:userId', userController.deleteUser);

module.exports = userRouter;
