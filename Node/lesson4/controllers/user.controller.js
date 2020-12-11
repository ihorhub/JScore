const {userService} = require('../services/user.service');

module.exports = {
    createUser: async (req, res) => {
        try {
            // const { email, password, name } = req.body;
            const create = await userService.insertUser(req.body);

            res.sendStatus(201).json(create);
        } catch (e) {
            res.status(400).json(e.message);
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
            res.status(404).json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = req.user;

            res.status(200).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUsersWithCar: async (req, res) => {
        try {
            const {limit=10, page=1,...where}=req.query;
            const offset=limit*(page-1) ;

            const UsersWithCars = await userService.findUsersWithCars(where, +limit, +offset);

            res.status(200).json(UsersWithCars);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.deleteUser(userId);

            res.status(200).json('User deleted');
        } catch (e) {
            res.status(404).json(e.message);
        }
    },
};
