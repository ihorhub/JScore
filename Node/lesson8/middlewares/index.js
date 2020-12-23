module.exports = {
    userMiddleware: require('./User.midleware'),
    userValidatorMiddleware: require('./user-validation.midlevares'),
    checkPasswordHash: require('./check-password-hash'),
    carsMiddleware: require('./Car.middlewaresa'),
    carsValidatorMiddleware: require('./cars-vaidation.middlewarwes'),
    checkAccessToken: require('./chech-access-token.middleware'),
    checkRefreshToken: require('./check-refresh-token.middleware'),
    fileMiddlewares: require('./file')
};
