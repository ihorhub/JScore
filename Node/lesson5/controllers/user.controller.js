const {userService} = require('../services/user.service');
const { ErrorHandler, errors: { CREATE_BODY} } = require('../error');

    module.exports = {
    createUser: async (req, res,next) => {
        try {
            // const { email, password, name } = req.body;
            const create = await userService.insertUser(req.body);

            res.sendStatus(ErrorHandler(CREATE_BODY.message,CREATE_BODY.code);
        } catch (e) {
            next(e);
        }
    },
    updateUsers: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = req.body;
            await userService.updateUser(user, userId);

            res.status(200).json({
                message: 'Updated'
            });
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = req.user;

            res.status(200).json(user);
        } catch (e) {
            next(e);
        }
    },

    getUsersWithCar: async (req, res) => {
        try {
            const {limit=10, page=1,...where}=req.query;
            const offset=limit*(page-1) ;

            const UsersWithCars = await userService.findUsersWithCars(where, +limit, +offset);

            res.status(200).json(UsersWithCars);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.deleteUser(userId);

            res.status(200).json('User deleted');
        } catch (e) {
            next(e);
        }
    },
};
