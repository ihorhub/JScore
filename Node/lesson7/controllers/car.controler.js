const { CarService} = require('../services');
const {ErrorHandler,errors:{CREATE_BODY}  } = require('../error');

module.exports = {

    getAllCars: async (req, res, next) => {
        try {
            const car = await CarService.findCarsByParams();

            res.json(car);

        } catch (e) {
            next(e)
        }
    },

    createCar: async (req, res, next) => {
        try {
            const car = req.body;

            const createCar = await CarService.insertCar(car);

            res.status(CREATE_BODY).json(createCar);

        } catch (e) {
            next(e)
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const {id} = req.params

            const car = await CarService.removeCar(id);

            res.json(car);

        } catch (e) {
            next(e)
        }
    },

    updateCars: async (req, res, next) => {
        try {
            const {id} = req.params;
            const car = req.body;

            const result = await CarService.updateCar(car, id);

            res.json(result);

        } catch (e) {
            next(e)
        }
    }
}


