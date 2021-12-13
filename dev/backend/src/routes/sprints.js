const sprintsRouter = require('express').Router();


const {getAllProjectSprints , addProjectSprint, removeProjectSprint, getProjectSprint } = require('../controllers/sprintController');


sprintsRouter.route('/project/:id').get( async( req ,res ,next) => {
    let response = await getAllProjectSprints(req.params.id);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );

sprintsRouter.route('/sprint/:id').get( async( req ,res ,next) => {
    let response = await getProjectSprint(req.params.id);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );

sprintsRouter.route('/project/add/:id').post( async( req ,res ,next) => {
    let response = await addProjectSprint(req.params.id,req.body);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );

sprintsRouter.route('/project/remove/:id').post( async( req ,res) => {
    let response = await removeProjectSprint(req.params.id, req.body);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
} );

sprintsRouter.route('/:id/tasks').get( async( req ,res ,next) => {
    let response = await getSprintTasks(req.params.id);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );

module.exports = sprintsRouter;