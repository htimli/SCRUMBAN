const Sprint = require('../models/sprintModel');
const Project = require('../models/projectModel');
const Task = require('../models/taskModel');



module.exports.getAllProjectSprints = async function(idProject){
    try{


        const id_sprints = await Project.findById(idProject).select('sprints').exec();            
        const sprints = await Sprint.find().where('_id').in(id_sprints.sprints).exec();
        
        return {
            success : true,
            data : sprints
        }

    }catch(err){
        return {
            success : false,
            message : 'sprints not found '+err
        };
    }
}

module.exports.getProjectSprint = async function(idSprint){
    try{
            
        const sprint = await Sprint.findById(idSprint).exec();
        
        return {
            success : true,
            data : sprint
        }

    }catch(err){
        return {
            success : false,
            message : 'sprint not found '+err
        };
    }
}

module.exports.addProjectSprint = async function(idProject,body){

    try{

        let sprint = new Sprint({
            name : body.name,
            tasks : body.tasks
        });
        console.log("==>",body);
        let project = await Project.findById(idProject);
        sprint.number = project.sprints.length +1 ;

        project.sprints.push(sprint._id);

        project.save()
        .then(doc =>{})
        .catch(err =>{});

        sprint.save()
        .then(doc =>{})
        .catch(err =>{});

        
        
        return {
            success : true,
            data : sprint
        }


    }catch(err){
        return {
            success : false,
            message : 'can not add a sprint '+err
        };
    }
}

module.exports.removeProjectSprint = async function (idProject, body) {
    try {

        let sprint = await Sprint.findById(body.id);

        let project = await Project.findById(idProject);

        let index = project.sprints.indexOf(sprint._id);
        if (index !== -1) {
            project.sprints.splice(index, 1);
        }
        else {
            return { success: false, message: "cannot find sprint index in project" + err };
        }

        await Sprint.deleteOne({ _id: body.id }).then(doc => { })
            .catch(err => { });

        project.save().then(doc => { }).catch(err => { });

        return {
            success: true,
            data: sprint
        }

    } catch (err) {
        return {
            success: false,
            message: 'can not remove Sprint ' + err
        };
    }
}

module.exports.getSprintTasks = async function(idSprint){
    try{
         
        const sprint = await Sprint.findById(idSprint);
        const tasks = await Task.find().where('_id').in(sprint.tasks).exec();

        return {
            success : true,
            data : tasks
        }

    }catch(err){
        return {
            success : false,
            message : 'sprints not found '+err
        };
    }
}
