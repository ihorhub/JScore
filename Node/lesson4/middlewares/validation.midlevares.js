module.exports={

    isIdCorrect:(req, res, next)=>{
        try {
            const {userId}=req.params

            if (!userId || id<0 || !Number.isInteger(+userId)){
                throw new Error('Not valid ID')
            }

            next();
        }catch (e) {
            res.json(e.message);
        }
    },

    isUserUpdateCorrect:(req, res, next)=>{
        try {
            const {email,name,password,...other}=req.body

            if (email && email.length<5){
                throw new Error('Not valid email');
            }
            if (name && name.length<2){
                throw new Error('Not valid name');
            }
            if (password && password.length<4){
                throw new Error('Not valid password');
            }
            if (Object.values(other).length){
                throw new Error('Not valid fields');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
        },

    isUserCreateCorrect:(req, res, next)=>{
        try {
            const {email,name,password,...other}=req.body

            if (!email || email.length<5){
                throw new Error('Not valid email');
            }
            if (!name || name.length<2){
                throw new Error('Not valid name');
            }
            if (!password || password.length<4){
                throw new Error('Not valid password');
            }
            if (Object.values(other).length){
                throw new Error('Not valid fields');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }

}
