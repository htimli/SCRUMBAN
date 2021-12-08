

const router = require('express').Router(); 

const usersRoutes = require("../routes/users");
const projectsRoutes = require("../routes/projects");
const sprintsRoutes = require('../routes/sprints');


router.use('/users', usersRoutes);
router.use('/projects',projectsRoutes);
router.use('/sprints',sprintsRoutes);

router.get('/',function (req, res, next){ 
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});






module.exports = router