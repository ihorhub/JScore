const userService = require('../services/user.service')
const db = require('../dataBase').getInstance()

module.exports = {
    checkIfUserValid: (req, res, next) => {
        try {
            const {email, password, name} = req.body;

            if (!email || !password|| !name) {
                throw new Error('User is not valid')
            }
            next();
        } catch (e) {
            res.status(400).join(e.message)
        }
    },

    checkEmailValid:async (req, res, next) => {
        try {
            const {email} = req.params;
            const users = await userService.findUsers();
            const findUser = users.find((user) => user.email === email);

            if (findUser) {
                throw new Error('ERROR!!!! This User already exist');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkUserIdValidator: (req, res, next) => {
        try {
            const {userId} = req.params;

            if (userId < 1) {
                throw new Error('think what number you enter');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};

