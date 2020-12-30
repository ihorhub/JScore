const {DataTypes} = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
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
                avatar: {
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
        await queryInterface.createTable('user_2_car', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'users',
                    as: 'user',
                    key: 'id'
                }
            },
            car_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'cars',
                    as: 'car',
                    key: 'id'
                }
            }
        });
            await queryInterface.createTable('o_auth', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                access_token: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                refresh_token: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    foreignKey: true,
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                    references: {
                        model: 'users',
                        as: 'user',
                        key: 'id'
                    }
                },
                created_at: {
                    type: Sequelize.DATE,
                    default: Sequelize.NOW
                }

            });
    },


down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('user_2_car');
    await queryInterface.dropTable('o_auth')
}
}
;
