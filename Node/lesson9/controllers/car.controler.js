const fs = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid');
const { CarService } = require('../services');
const { ErrorHandler, errors: { CREATE_BODY } } = require('../error');
const { transactionInstance } = require('../dataBase').getInstance();

module.exports = {

    getAllCars: async (req, res, next) => {
        try {
            const car = await CarService.findCarsByParams();

            res.json(car);
        } catch (e) {
            next(e);
        }
    },

    createCar: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const car = req.body;
            const { photos, documents } = req;
            const createCar = await CarService.insertCar(car, transaction);

            if (photos) {
                const pathWithoutPublic = path.join('car', `${createCar.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                await fs.mkdir(photoDir, { recursive: true });
                photos.map(async (photo) => {
                    const fileExtension = photo.name.split('.').pop();
                    const photoName = `${uuid}.${fileExtension}`;
                    const finalPhotoPath = path.join(pathWithoutPublic, photoName);
                    await photos.mv(path.join(photoDir, photoName));
                    await CarService.updateCar({ photos: finalPhotoPath }, createCar.id,transaction);
                });
            }

            if (documents) {
                const pathWithoutPublic = path.join('car', `${createCar.id}`, 'documents');
                const docDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                await fs.mkdir(docDir, { recursive: true });
                documents.map(async (doc) => {
                    const fileExtension = doc.name.split('.').pop();
                    const docName = `${uuid}.${fileExtension}`;
                    const finalDocPath = path.join(pathWithoutPublic, docName);
                    await documents.mv(path.join(docDir, docName));
                    await CarService.updateCar({ documents: finalDocPath }, createCar.id,transaction);
                });
            }
            await transaction.commit();
            res.status(CREATE_BODY).json(createCar);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const { id } = req.params;

            const car = await CarService.removeCar(id,transaction);
            await transaction.commit();
            res.json(car);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    },

    updateCars: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const { id } = req.params;
            const car = req.body;
            const { photos, documents } = req;
            const result = await CarService.updateCar(car, id,transaction);

            if (photos) {
                const pathWithoutPublic = path.join('car', `${createCar.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                await fs.mkdir(photoDir, { recursive: true });
                photos.map(async (photo) => {
                    const fileExtension = photo.name.split('.').pop();
                    const photoName = `${uuid}.${fileExtension}`;
                    const finalPhotoPath = path.join(pathWithoutPublic, photoName);
                    await photos.mv(path.join(photoDir, photoName));
                    await CarService.updateCar({ photos: finalPhotoPath }, createCar.id, transaction);
                });
            }

            if (documents) {
                const pathWithoutPublic = path.join('car', `${createCar.id}`, 'documents');
                const docDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                await fs.mkdir(docDir, { recursive: true });
                documents.map(async (doc) => {
                    const fileExtension = doc.name.split('.').pop();
                    const docName = `${uuid}.${fileExtension}`;
                    const finalDocPath = path.join(pathWithoutPublic, docName);
                    await documents.mv(path.join(docDir, docName));
                    await CarService.updateCar({ documents: finalDocPath }, createCar.id, transaction);
                });
            }
            await transaction.commit();
            res.json(result);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    }
};
