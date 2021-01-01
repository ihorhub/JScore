module.exports = {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SERCER || 'SECRET_ACCESS',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'SECRET_REFRESH',
    DB_USERNAME: process.env.SEQUELIZE_USERNAME || 'qwerty',
    DB_PASSWORD: process.env.SEQUELIZE_PASSWORD || '123456',
    ROOT_EMAIL: process.env.ROOT_EMAIL || 'gmail@gmsil',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '123456',
    ROOT_EMAIL_SERVICE: process.env.ROOT_EMAIL_SERVICE || 'gmail',

};
