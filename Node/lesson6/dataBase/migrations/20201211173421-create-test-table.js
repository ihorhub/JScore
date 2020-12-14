const test = require('../test/test');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', test.users);

        await queryInterface.bulkInsert('cars', test.cars);
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('users');

        await queryInterface.bulkDelete('cars');
    },

};
