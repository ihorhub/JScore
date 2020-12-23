const fs = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid');
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
            const {photos, documents} = req

            if (photos) {
                const pathWithoutPublic = path.join('car', `${createCar.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = photos.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);
                await fs.mkdir(photoDir, {recursive: true});
                await photos.mv(path.join(photoDir, photoName));
                const createCar = await CarService.insertCar(car);

            }
            if (documents) {
                const pathWithoutPublic = path.join('car', `${createCar.id}`, 'documents');
                const docDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = documents.name.split('.').pop();
                const docName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, docName);
                await fs.mkdir(docDir, {recursive: true});
                await photos.mv(path.join(docDir, docName));

            }
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


