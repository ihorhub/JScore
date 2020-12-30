module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
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
            photos: {
                type: DataTypes.STRING
            },
            documents: {
                type: DataTypes.STRING
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
