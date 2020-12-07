const db = require('../dataBase').getInstance();

module.exports = {
    findUsers: (email) => {
        const UserModel = db.getModel('User');
        return UserModel.findAll({
            where: { email }
        });
    },

    insertUser: (user) => {
        const UserModel = db.getModel('User');
        return UserModel.create(user);
    },

    findUserById: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.findByPk(userId);
    },
    updateUser: (user, userId) => {
        const UserModel = db.getModel('User');
        return UserModel.update(user, {
            where: {
                userId
            }
        });
    },

    findUsersWithCars: () => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');
        return CarModel.findAll({
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    deleteUser: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({
            where: {
                userId
            }
        });
    }
};
