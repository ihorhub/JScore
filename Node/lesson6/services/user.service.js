const db = require('../dataBase').getInstance();

module.exports = {
    insertUser: (user) => {
        const UserModel = db.getModel('User');
        return UserModel.create(user);
    },

    findUserById: (userId) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');
        return UserModel.findByPk(userId, { include: CarModel });
    },

    updateUser: (user, userId) => {
        const UserModel = db.getModel('User');
        return UserModel.update(user, {
            where: {
                userId
            }
        });
    },

    findUsersWithCars: (where = {}, limit = 10, offset = 0) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');
        return UserModel.findAll({
            where,
            limit,
            offset,
            include: [{ model: CarModel }]
        });
    },

    deleteUser: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({
            where: {
                userId
            }
        });
    },
    findUserByParams: (findObj) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: findObj
        });
    }
};
