module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INT,
                primaryKey: true,
                autoIncrement: true
            },
           model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INT,
                allowNull: false
            },
            year: {
                type: DataTypes.INT,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INT,
                foreignKey: true
            },
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    const User = require('./User')(client, DataTypes);
    Car.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    return Car;
};
