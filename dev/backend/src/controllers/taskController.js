const Task = require('../models/taskModel');
const Project =require('../models/projectModel');

module.exports.getAllTasks = async function(){
    try{

        let idProject = '61af6525461d98d8f498a17c';

        const idTasks = await Project.findById(idProject).select('tasks').exec();            
        const tasks = await Task.find().where('_id').in(idTasks.tasks).exec();
        
        return {
            success : true, 
            data : tasks
        }

    }catch{
        return {
            success : false,
            message :'Tasks not found '+err
        }
    }
}
module.exports.addProjectTask = async function(){
    try{

        let task = new Task({
            title : "task1", 
            desc : "ajouter formulaire a la premiere page",
            state : 'En cours',
        });

        let idProject = '61af6525461d98d8f498a17c';
        let project = await Project.findById(idProject);
        project.tasks.push(task._id);

        console.log(project);
        console.log(task);

        project.save().then(doc =>{}).catch(err =>{});
        task.save().then(doc =>{}).catch(err =>{});

        return {
            success : true,
            data : project
        }


    }catch(err){
        return {
            success : false,
            message : 'can not add Task '+err
        };
    }
}