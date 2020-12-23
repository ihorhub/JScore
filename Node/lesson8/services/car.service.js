const db = require('../dataBase').getInstance();

module.exports = {
    findCarsByParams: (findObj) => {
        const CarModel = db.getModel('Car');
        return CarModel.findOne({
            where: findObj
        });
    },

    insertCar: (car) => {
        const CarModel = db.getModel('Car');
        return CarModel.create(car);
    },

    removeCar: (id) => {
        const CarModel = db.getModel('Car');
        return CarModel.destroy({ where: { id } });
    },

    updateCar: (car, id) => {
        const CarModel = db.getModel('Car');
        return CarModel.update('car',
            { where: { id } });
    },
    findCarById: (іd) => {
        const CarModel = db.getModel('Car');
        return CarModel.findByPk(id);
    },

};
