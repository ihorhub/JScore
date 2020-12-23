const fs = require('fs-extra').promises;
const uuid = require('uuid').v1(),
const { userService } = require('../services');
const { ErrorHandler, errors: { CREATE_BODY } } = require('../error');
const { hash } = require('../helper/passwors.helper');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {
                avatar,
                body: { password, email, name }
            } = req;
            const hashPassword = await hash(req.body.password);

            Object.assign(req.body, { hashPassword });

            const create = await userService.insertUser(req.body);
            if (avatar) {
                const pathWithoutPublic = path.join('user', `${createUser.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);

                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(path.join(photoDir, photoName));

                await userService.updateUserById(createUser.id, { avatar: finalPhotoPath });
            }
            res.status(CREATE_BODY).json(create);
        } catch (e) {
            next(e);
        }
    },

    updateUsers: async (req, res, next) => {
        try {
            const {avatar, userId } = req.params;
            const user = req.body;
            if (avatar) {
                const pathWithoutPublic = path.join('user', `${createUser.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);
                await fs.rmdir(path.join(photoDir), { recursive: true })
                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(path.join(photoDir, photoName));
                req.user.avatar = finalPhotoPath;

                await userService.updateUserById(user, userId);
            }


            res.json({
                message: 'Updated'
            });
        } catch (e) {
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
        try {
            const { userId } = req.params;
            const user = await userService.deleteUser(userId);

            res.json('User deleted');
        } catch (e) {
            next(e);
        }
    },
};
