

const router = require('express').Router(); 


router.get('/',function (req, res, next){
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});

const usersroutes = require("../routes/users");


router.use('/users', usersroutes);




module.exports = router