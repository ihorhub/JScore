const {Router} = require('express');
const {createUser,deleteUser,getUserById,getUsersWithCar,updateUsers} = require('../controllers/user.controller');
const {userMiddleware} = require('../middlewares/index ');

const userRouter = Router();

userRouter.get('/', getUsersWithCar);
userRouter.post('/', userMiddleware.checkEmailValid , createUser);
userRouter.get('/:userId', userMiddleware.checkUserIdValidator, getUserById);
userRouter.put('/:userId', userMiddleware.checkIfUserValid, updateUsers);
userRouter.delete('/:userId', userMiddleware.checkIfUserValid, deleteUser);

module.exports = userRouter;
