const { errors, ErrorHandler } = require('../../error');
const {PHOTO_MAX_QOUNTITY,FILE_MAX_QOUNTITY} = require('../../constans/constans')

module.exports = (req, res, next) => {
    try {
        if (req.photos.length > PHOTO_MAX_QOUNTITY) {
            throw new ErrorHandler(errors.JUST_TEN_PHOTO.message, errors.JUST_TEN_PHOTO.code);
        },
        if (req.docs.length > FILE_MAX_QOUNTITY) {
            throw new ErrorHandler(errors.JUST_TEN_PHOTO.message, errors.JUST_TEN_PHOTO.code);
        }

        [req.avatar] = req.photos;
        [req.docs] = req.docs;

        next();
    } catch (e) {
        next(e);
    }
};
