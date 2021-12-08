const sprintsRouter = require('express').Router();


const {getAllProjectSprints , addProjectSprint } = require('../controllers/sprintController');


sprintsRouter.route('/project').get( async( req ,res ,next) => {
    let response = await getAllProjectSprints();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );

sprintsRouter.route('/project/add').get( async( req ,res ,next) => {
    let response = await addProjectSprint();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
    next();
} );


module.exports = sprintsRouter;