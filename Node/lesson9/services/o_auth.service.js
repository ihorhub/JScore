const db = require('../dataBase').getInstance();

module.exports = {
    createTokenPair: (tokenPair,transaction) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.create(tokenPair, transaction);
    },

    getTokenWithUserByParams: (findObject) => {
        const OAuthModel = db.getModel('O_Auth');
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            include: {
                model: OAuthModel,
                where: findObject
            }
        });
    },
    deleteToken: (accessToken , transaction) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.destroy({
            where: {access_token: accessToken},  transaction
        });
    },
    deleteTokenById: (id, transaction) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.destroy({
            where: { id }, transaction
        });
    }

};
