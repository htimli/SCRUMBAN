const tasksRouter = require('express').Router();

const {getAllProjectTasks ,addProjectTask } = require('../controllers/taskController') ;

tasksRouter.route('/project/:id').get( async( req ,res ,next) => {
    let response = await getAllProjectTasks(req.params.id);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );

tasksRouter.route('/project/add/:id').post( async( req ,res ,next) => {
    let response = await addProjectTask(req.params.id, req.body);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );


module.exports = tasksRouter;