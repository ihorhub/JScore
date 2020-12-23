const { CarService } = require('../services');

module.exports = {
    checkICarRegisterId: async (req, res, next) => {
        try {
            const { id } = req.params;
            const car = await CarService.findCarById(id);

            if (!car) {
                throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    }

};
