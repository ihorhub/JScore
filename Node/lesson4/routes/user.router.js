const { Router } = require('express');
const {
    createUser, deleteUser, getUserById, getUsersWithCar, updateUsers
} = require('../controllers/user.controller');
const { userMiddleware,validationMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', getUsersWithCar);
userRouter.post('/', validationMiddleware.isUserCreateCorrect, userMiddleware.checkIsRegisterEmail, createUser);

userRouter.use('/userId', validationMiddleware.isIdCorrect, userMiddleware.checkIsRegisterId);

userRouter.put('/:userId', validationMiddleware.isUserUpdateCorrect, updateUsers);
userRouter.get('/:userId', getUserById);
userRouter.delete('/:userId',  deleteUser);

module.exports = userRouter;
