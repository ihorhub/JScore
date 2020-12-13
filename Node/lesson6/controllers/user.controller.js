const {userService} = require('../services/user.service');
const { ErrorHandler, errors: { CREATE_BODY} } = require('../error');

    module.exports = {
    createUser: async (req, res, next) => {
        try {
            // const { email, password, name } = req.body;
            const create = await userService.insertUser(req.body);

            res.json(create);
        } catch (e) {
            next(e);
        }
    },

    updateUsers: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user = req.body;
            await userService.updateUser(user, userId);

            res.json({
                message: 'Updated'
            });
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const user = req.user;

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    getUsersWithCar: async (req, res, next) => {
        try {
            const {limit=10, page=1,...where}=req.query;
            const offset=limit*(page-1) ;

            const UsersWithCars = await userService.findUsersWithCars(where, +limit, +offset);

            res.json(UsersWithCars);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user = await userService.deleteUser(userId);

            res.json('User deleted');
        } catch (e) {
            next(e);
        }
    },
};
