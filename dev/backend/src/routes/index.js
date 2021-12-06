

const router = require('express').Router(); 

const usersRoutes = require("../routes/users");
const projectsRoutes = require("../routes/projects");


router.use('/users', usersRoutes);
router.use('/projects',projectsRoutes);

router.get('/',function (req, res, next){ 
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});






module.exports = router