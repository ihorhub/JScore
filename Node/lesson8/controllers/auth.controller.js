const {oAuthService} = require('../services');
const {AUTHORIZATION} = require('../constans/constans'),
const {errors:{NO_CONTENTS}} = require ('../error')
const tokinizer = require('../helper/tokinizer');

module.exports = {
    login: async (req, res, next) => {
        try {
            const {id} = req.user;
            const token_pair = tokinizer();

            await oAuthService.createTokenPair({user_id: id, ...token_pair});

            res.json(token_pair);
        } catch (e) {
            next(e);
        }
    },
    logout: async (req, res, next) => {
        try {
            const accessToken = req.header(AUTHORIZATION);

            await oAuthService.deleteToken(accessToken);

            res.send(NO_CONTENTS);
        } catch (e) {
            next(e);
        }
    },
    newTokenPair: async (req, res, next) => {
        try {
            const { id } = req.user;
            await oAuthService.deleteTokenById(id);

            const token_pair = tokenizer();
            await oAuthService.createTokenPair({ user_id: id, ...token_pair });

            res.json(token_pair);
        } catch (e) {
            next(e);
        }
    }
};
