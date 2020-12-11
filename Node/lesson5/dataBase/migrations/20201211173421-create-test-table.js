'use strict';
const test = require('../test/test')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.bulkInsert(
          'users',
          test.users
      );

      await queryInterface.bulkInsert(
          'cars',
          test.cars
      );
    };
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.bulkDelete('users');

    await queryInterface.bulkDelete('cars');
  }
  }
};
