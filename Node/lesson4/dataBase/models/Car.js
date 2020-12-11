module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            year: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            },
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    // const User = require('./User')(client, DataTypes);
    // Car.belongsTo(User, { as: 'user',foreignKey: 'user_id',onDelete:'cascade'  });

    return Car;
};