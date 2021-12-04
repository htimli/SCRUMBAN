

const router = require('express').Router(); 

const usersroutes = require("../routes/users");


router.use('/users', usersroutes);


router.get('/',function (req, res, next){ 
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});






module.exports = router