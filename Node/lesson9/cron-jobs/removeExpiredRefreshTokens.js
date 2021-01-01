const { oAuthService } = require('../services');

module.exports = async () => {
    console.log('START');
    await oAuthService.removeExpiredRefreshTokens();

    console.log('FINISH');
};
