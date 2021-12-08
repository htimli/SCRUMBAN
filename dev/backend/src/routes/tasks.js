const tasksRouter = require('express').Router();

const {getAllTasks ,addProjectTask } = require('../controllers/taskController') ;

tasksRouter.route('/project').get( async( req ,res ,next) => {
    let response = await getAllTasks();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );

tasksRouter.route('/project/add').get( async( req ,res ,next) => {
    let response = await addProjectTask();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );


module.exports = tasksRouter;