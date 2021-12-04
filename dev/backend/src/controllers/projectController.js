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

module.exports.addProject = async function() {

    try {
    
        let project = Project({titre : "projet_2",creationDate : new Date() , 
        users : ["61aba199ecf32097e6fa78e7","61ab81a10e57448bde43cb6b"]});
        

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

