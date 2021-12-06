const Project = require('../models/projectModel');
const UserModel = require('../models/userModel');



module.exports.getAllProjects = async function() {
    let total = await Project.countDocuments({});
    let limit = parseInt(total);

    try{
        const projects  = await Project.find().limit(limit);
        
        return {
            success : true,
            data : projects,
            total : total.toString(),
        }

    }catch(err){
        return {
            success : false ,
            message : 'Projects not found '+err 
        };
    }
}

module.exports.addProject = async function(body) {

    try {
    
        let project = new Project({
            title : body.title ,
            scrumMaster: body.scrumMaster,
            progress: body.progress,
            creationDate : new Date()
        });
        

        project.save()
        .then(doc =>{})
        .catch(err =>{});

        return {
            success : true,
            data : project
        }

    }catch (err){
        return { 
            success:false , 
            message: "cannot add Project "+err };
        }
}


module.exports.getProjectParticipant = async function() {

    try {

        let project = Project.findOne({
            title : "projet_2"
        });
    
        console.log(project.users);
        

        return {
            success : true,
            
        }

    }catch (err){
        return { 
            success:false , 
            message: "cannot add Project "+err };
        }
}