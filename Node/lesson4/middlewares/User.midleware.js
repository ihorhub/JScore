const userService = require('../services/user.service');
const db = require('../dataBase').getInstance();

module.exports = {

    checkIsRegisterEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await userService.findUsersWithCars({email},1);

            if (user) {
                throw new Error('ERROR!!!! This User already exist');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkIsRegisterId: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user =  await userService.findUserById(userId);

            if (!user) {
                throw new Error('user is not present');
            }
            req.user = user

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
