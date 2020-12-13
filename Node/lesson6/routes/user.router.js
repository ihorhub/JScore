const { Router } = require('express');
const {userController} = require('../controllers');
const { userMiddleware,validationMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', userController.getUsersWithCar);
userRouter.post('/', validationMiddleware.isUserCreateCorrect, userMiddleware.checkIsRegisterEmail, userController.createUser);

userRouter.use('/userId', validationMiddleware.isIdCorrect, userMiddleware.checkIsRegisterId);

userRouter.put('/:userId', validationMiddleware.isUserUpdateCorrect, userController.updateUsers);
userRouter.get('/:userId', userController.getUserById);
userRouter.delete('/:userId',  userController.deleteUser);

module.exports = userRouter;
