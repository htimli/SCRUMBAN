const Sprint = require('../models/sprintModel');
const Project = require('../models/projectModel');



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

module.exports.addProjectSprint = async function(idProject,body){


    

    try{
        let sprint = new Sprint({
            name : body.name
        });
        console.log('body =>',body);
        let project = await Project.findById(idProject);
        sprint.number = project.sprints.length +1 ;

        project.sprints.push(sprint._id);

        console.log(project);
        console.log(sprint);

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

