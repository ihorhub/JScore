const fs = require('fs-extra').promises;
const uuid = require('uuid').v1();
const {userService,emailService} = require('../services');
const { ErrorHandler, errors: { CREATE_BODY } } = require('../error');
const { hash } = require('../helper/passwors.helper');
const {transactionInstance} = require('../dataBase').getInstance()

module.exports = {
    createUser: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const {
                avatar,
                body: { password, email, name }
            } = req;
            const hashPassword = await hash(req.body.password);

            Object.assign(req.body, { hashPassword });

            const create = await userService.insertUser(req.body,transaction);
            if (avatar) {
                const pathWithoutPublic = path.join('user', `${createUser.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);
                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(path.join(photoDir, photoName));

                await userService.updateUserById(createUser.id, { avatar: finalPhotoPath },transaction);
            }
            await emailService.sendMail(email, WELCOME, { userName: name };
            await transaction.commit();
            res.status(CREATE_BODY).json(create);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    },

    updateUsers: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const {avatar, userId } = req.params;
            const user = req.body;
            if (avatar) {
                const pathWithoutPublic = path.join('user', `${createUser.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);
                await fs.rmdir(path.join(pathWithoutPublic), { recursive: true });
                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(path.join(photoDir, photoName));
                req.user.avatar = finalPhotoPath;

                await userService.updateUserById(req.user, userId,transaction);
            }
            await transaction.commit();
            res.json({
                message: 'Updated'
            });
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            res.json(req.user);

        } catch (e) {
            next(e);
        }
    },

    getUsersWithCar: async (req, res, next) => {
        try {
            const { limit = 10, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

            const UsersWithCars = await userService.findUsersWithCars(where, +limit, +offset);

            res.json(UsersWithCars);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const { userId,id } = req.params;
             await userService.deleteUser(userId,transaction);
            const userDir = path.join(process.cwd(), 'public', 'user', `${id}`);
            fs.rmdir(userDir, { recursive: true });
            await transaction.commit();
            res.json('User deleted');
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    },
};
