const Sprint = require('../models/sprintModel');
const Project = require('../models/projectModel');



module.exports.getAllProjectSprints = async function(){
    try{
        let idProject = '61af6525461d98d8f498a17c';

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

module.exports.addProjectSprint = async function(){
    try{
        let sprint = new Sprint({
            number : 1,
            name : "sprint1"
        });
        let idProject = '61af6525461d98d8f498a17c';

        let project = await Project.findById(idProject);
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
            data : project
        }


    }catch(err){
        return {
            success : false,
            message : 'can not add a sprint '+err
        };
    }
}