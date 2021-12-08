

const router = require('express').Router(); 

const usersRoutes = require("../routes/users");
const projectsRoutes = require("../routes/projects");
const sprintsRoutes = require('../routes/sprints');
const tasksRoutes = require('../routes/tasks');


router.use('/users', usersRoutes);
router.use('/projects',projectsRoutes);
router.use('/sprints',sprintsRoutes);
router.use('/tasks',tasksRoutes);

router.get('/',function (req, res, next){ 
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});






module.exports = router