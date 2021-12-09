const projectsRouter = require('express').Router();

const { getAllProjects, getProject, addProject, getProjectParticipant, getAllUserProjects } = require('../controllers/projectController');


projectsRouter.route('/all').get(async(req, res, next) => {
    console.log('all');
    let response = await getAllProjects();
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
    next();
});

projectsRouter.route('/all/:id').get(async(req, res) => {
    let response = await getAllUserProjects(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});


projectsRouter.route('/:id').get(async(req, res) => {
    let response = await getProject(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});


projectsRouter.route('/add').post(async(req, res) => {
    let response = await addProject(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

projectsRouter.route('/participant').get(async(req, res) => {
    let response = await getProjectParticipant();
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});


module.exports = projectsRouter;