const projectsRouter = require('express').Router();

const {getAllProjects, addProject, getProjectParticipant } = require('../controllers/projectController');


projectsRouter.route('/all').get( async( req ,res ) => {
    let response = await getAllProjects();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
} );

projectsRouter.route('/add').get( async( req ,res ) => {
    let response = await addProject();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
} );

projectsRouter.route('/participant').get( async( req ,res ) => {
    let response = await getProjectParticipant();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
} );


module.exports = projectsRouter;