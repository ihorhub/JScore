const {oAuthService} = require('../services');
const {AUTHORIZATION} = require('../constans/constans'),
const {errors:{NO_CONTENTS}} = require ('../error')
const tokinizer = require('../helper/tokinizer');
const {transactionInstance} = require('../dataBase').getInstance()

module.exports = {
    login: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const {id} = req.user;
            const token_pair = tokinizer();

            await oAuthService.createTokenPair({user_id: id, ...token_pair},transaction);
            await transaction.commit();

            res.json(token_pair);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    },
    logout: async (req, res, next) => {
        const transaction = await transactionInstance()
        try {
            const accessToken = req.header(AUTHORIZATION);

            await oAuthService.deleteToken(accessToken,transaction);
            await transaction.commit();

            res.send(NO_CONTENTS);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    },
    newTokenPair: async (req, res, next) => {
        const transaction = await transactionInstance()
        try {
            const { id } = req.user;
            await oAuthService.deleteTokenById(id);

            const token_pair = tokenizer();
            await oAuthService.createTokenPair({ user_id: id, ...token_pair },transaction);
            await transaction.commit();

            res.json(token_pair);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    }
};
