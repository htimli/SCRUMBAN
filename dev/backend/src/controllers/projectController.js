const Project = require('../models/projectModel');
const User = require('../models/userModel');



module.exports.getAllProjects = async function () {
    let total = await Project.countDocuments({});
    let limit = parseInt(total);

    try {
        const projects = await Project.find().limit(limit);

        return {
            success: true,
            data: projects,
            total: total.toString(),

        }

    } catch (err) {
        return {
            success: false,
            message: 'Projects not found ' + err
        };
    }
}

module.exports.getProject = async function (id) {
    try {
        const project = await Project.findById(id);
        return {
            success: true,
            data: project
        };
    } catch (err) {
        return {
            success: false,
            message: 'Project not found' + err
        };
    }
}

module.exports.getAllUserProjects = async function (id) {

    try {
        const projects = await Project.find().where('users').in(id);

        return {
            success: true,
            data: projects,
        }

    } catch (err) {
        return {
            success: false,
            message: 'Projects not found ' + err
        };
    }
}



module.exports.addProject = async function (body) {

    try {

        let user = await User.findById(body.user);

        let project = new Project({
            title: body.title,
            scrumMaster: user.userName,
            progress: body.progress,
            creationDate: new Date(),
        });

        project.users.push(user._id);
        user.projects.push(project._id);

        console.log(project);
        console.log(user);

        project.save()
            .then(doc => { })
            .catch(err => { });

        return {
            success: true,
            data: project
        }


    } catch (err) {
        return {
            success: false,
            message: "cannot add Project " + err
        };
    }
}


module.exports.getProjectParticipant = async function () {

    try {

        let project = Project.findOne({
            title: "projet_2"
        });

        console.log(project.users);


        return {
            success: true,

        }

    } catch (err) {
        return {
            success: false,
            message: "cannot add Project " + err
        };
    }
}

module.exports.getAllProjectUsers = async function (id) {
    try {
        let users_id = await Project.findById(id).select('users');

        let users = await User.find().where('_id').in(users_id.users);

        console.log('users', users);



        if (!users) {
            return {
                success: false,
                msg: "users does not exists"
            }
        } else {
            return {
                success: true,
                data: users
            }
        }
    } catch (err) {
        return { success: false, message: "cannot find users" + err };
    }
}

module.exports.addProjectUser = async function (projectId, body) {
    try {

        let user = await User.findOne({ email: body.email });
        console.log(user);

        if (!user) {
            return {
                success: false,
                msg: 'email not found'
            }
        }

        let project = await Project.findById(projectId);

        project.users.push(user._id);

        project.save()
            .then(doc => { })
            .catch(err => { });

        return {
            success: true,
            data: user
        }

    } catch (err) {
        return { success: false, message: "cannot find add user to project" + err };
    }
}

module.exports.removeProjectUser = async function (projectId, body) {
    try {


        let user = await User.findOne({ email: body.email });

        if (!user) {
            return {
                success: false,
                msg: 'email not found'
            }
        }

        let project = await Project.findById(projectId);

        console.log(project.users);
        console.log('hassan');

        let index = project.users.indexOf(user._id);
        project.users.splice(index,1);

        project.save()
            .then(doc => { })
            .catch(err => { });

        console.log(project.users);

        return {
            success: true,
            data: user
        }

    } catch (err) {
        return { success: false, message: "cannot find remove user to project" + err };
    }
}



