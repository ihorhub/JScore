const { Router } = require('express');
const { carController } = require('../controllers');
const { carsMiddleware, carsValidatorMiddleware } = require('../middlewares');

const carRouter = Router();

carRouter.get('/', carController.getAllCars);

carRouter.post('/',
    carsMiddleware.checkICarRegisterId,
    carsValidatorMiddleware.joiCarValid,
    carController.createCar);

carRouter.delete('/:id',
    carsMiddleware.checkICarRegisterId,
    carsValidatorMiddleware.joiCarIdValid,
    carController.deleteCar);

carRouter.put('/:id',
    carsMiddleware.checkICarRegisterId,
    carsValidatorMiddleware.joiCarUpdateValidator,
    carController.updateCars);

module.exports = carRouter;
