const { ErrorHandler, errors: { NOT_VALID_BODY,UNAUTHORIZED_BODY,NOT_VALID_ID,CREATE_BODY } } = require('../error');
const userService = require('../services/user.service');
const db = require('../dataBase').getInstance();

module.exports={

    isIdCorrect:(req, res, next)=>{
        try {
            const {userId}=req.params

            if (!userId || userId<0 || !Number.isInteger(+userId)){
                throw new ErrorHandler(NOT_VALID_ID.message,NOT_VALID_ID.code)
            }

            next();
        }catch (e) {
            next(e)
        }
    },

    isUserUpdateCorrect:(req, res, next)=>{
        try {
            const {email,name,password,...other}=req.body

            if (email && email.length<5){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }
            if (name && name.length<2){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }
            if (password && password.length<4){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }
            if (Object.values(other).length){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }

            next();
        } catch (e) {
            next(e);
        }
        },

    isUserCreateCorrect:(req, res, next)=>{
        try {
            const {email,name,password,...other}=req.body

            if (!email || email.length<5){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }
            if (!name || name.length<2){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code;
            }
            if (!password || password.length<4){
                throw new ErrorHandler (NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }
            if (Object.values(other).length){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    }

}
