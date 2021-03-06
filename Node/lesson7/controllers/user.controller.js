const { userService } = require('../services');
const { ErrorHandler, errors: { CREATE_BODY } } = require('../error');
const { hash } = require('../helper/passwors.helper');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const password = await hash(req.body.password);

            Object.assign(req.body, { password });

            const create = await userService.insertUser(req.body);

            res.status(CREATE_BODY).json(create);
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

    getUserById: async (req, res, next) => {
        try {
            res.json(req.user);

        } catch (e) {
            next(e);
        }
    },

    getUsersWithCar: async (req, res, next) => {
        try {
            const { limit = 10, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

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
