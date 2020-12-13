'use strict';
const {DataTypes}=require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },

        }
    );
    await queryInterface.createTable(
        'cars',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          price: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false
          },
          model: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          year: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          user_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            onUpdate: 'cascade',
            onDelete: 'cascade',
            references: {
              references: {
                model: 'users',
                key: 'id'
              }
            }
          }
        }
    );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropAllTables()
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
