const Task = require('../models/taskModel');
const Project = require('../models/projectModel');
const Sprint = require('../models/sprintModel');

module.exports.getAllProjectTasks = async function (idProject) {
    try {

        const idTasks = await Project.findById(idProject).select('tasks').exec();
        const tasks = await Task.find().where('_id').in(idTasks.tasks).exec();

        console.log(tasks)

        return {
            success: true,
            data: tasks
        }

    } catch (err) {
        return {
            success: false,
            message: 'Tasks not found ' + err
        }
    }
}

module.exports.getTask = async function (idTask) {
    try {

        const task = await Task.findById(idTask).exec();

        return {
            success: true,
            data: task
        }

    } catch (err) {
        return {
            success: false,
            message: 'task not found ' + err
        };
    }
}

module.exports.addProjectTask = async function (idProject, body) {
    try {

        let task = new Task({
            title: body.title,
            desc: body.desc,
            state: 'A faire',
        });

        let project = await Project.findById(idProject);
        project.tasks.push(task._id);

        console.log(project);
        console.log(task);

        project.save().then(doc => { }).catch(err => { });
        task.save().then(doc => { }).catch(err => { });

        return {
            success: true,
            data: project
        }


    } catch (err) {
        return {
            success: false,
            message: 'can not add Task ' + err
        };
    }
}

module.exports.removeProjectTask = async function (idProject, body) {
    try {

        let task = await Task.findById(body.id);

        let project = await Project.findById(idProject);

        let index = project.tasks.indexOf(task._id);
        if (index !== -1) {
            project.tasks.splice(index, 1);
        }
        else {
            return { success: false, message: "cannot find task index in project" + err };
        }

        for (idSprint of project.sprints) {
            let sprint = await Sprint.findById(idSprint);
            console.log(sprint);
            console.log('je veux rentrer');
            let index = sprint.tasks.indexOf(task._id);
            console.log(index);
            if (index !== -1) {
                sprint.tasks.splice(index, 1);
            }

        }

        console.log(Task);
        console.log('ici');
        await Task.deleteOne({ _id: body.id }).then(doc => { })
            .catch(err => { });

        console.log(Task);

        project.save().then(doc => { }).catch(err => { });

        return {
            success: true,
            data: task
        }

    } catch (err) {
        return {
            success: false,
            message: 'can not remove Task ' + err
        };
    }
}

module.exports.updateTask = async function (idTask, body) {
    try {

        const task = await Task.findByIdAndUpdate(
            { _id: idTask },
            { state: body.state }
        ).exec();

        return {
            success: true,
            data: task
        }

    } catch (err) {
        return {
            success: false,
            message: 'task not found ' + err
        };
    }
}