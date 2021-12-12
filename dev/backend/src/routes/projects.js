const projectsRouter = require('express').Router();

const { getAllProjects, getProject, addProject, getProjectParticipant, getAllUserProjects, getAllProjectUsers ,addProjectUser , addSprintTask, removeProjectUser } = require('../controllers/projectController');


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


projectsRouter.route('/users/:id').get(async(req, res) => {
    let response = await getAllProjectUsers(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

projectsRouter.route('/addUser/:pid').post(async(req, res) => {
    console.log(req.body);
    let response = await addProjectUser(req.params.pid,req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

projectsRouter.route('/removeUser/:pid').post(async(req, res) => {
    let response = await removeProjectUser(req.params.pid,req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

projectsRouter.route('/addSprintTask/:pid/:sid/:tid').post(async(req, res) => {
    let response = await addSprintTask(req.params.pid,req.params.sid,req.params.tid,req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});



module.exports = projectsRouter;