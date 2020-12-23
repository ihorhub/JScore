const { errors, ErrorHandler } = require('../../error');

module.exports = (req, res, next) => {
    try {
        if (req.photos.length > 10) {
            throw new ErrorHandler(errors.JUST_TEN_PHOTO.message, errors.JUST_TEN_PHOTO.code);
        },
        if (req.docs.length > 10) {
            throw new ErrorHandler(errors.JUST_TEN_PHOTO.message, errors.JUST_TEN_PHOTO.code);
        }

        [req.avatar] = req.photos;
        [req.docs] = req.docs;

        next();
    } catch (e) {
        next(e);
    }
};
