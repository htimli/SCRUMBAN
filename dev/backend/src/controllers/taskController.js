const Task = require("../models/taskModel");
const Project = require("../models/projectModel");

module.exports.getAllProjectTasks = async function (idProject) {
  try {
    const idTasks = await Project.findById(idProject).select("tasks").exec();
    const tasks = await Task.find().where("_id").in(idTasks.tasks).exec();

    console.log(tasks);

    return {
      success: true,
      data: tasks,
    };
  } catch (err) {
    return {
      success: false,
      message: "Tasks not found " + err,
    };
  }
};

module.exports.getTask = async function (idTask) {
  try {
    const task = await Task.findById(idTask).exec();

    return {
      success: true,
      data: task,
    };
  } catch (err) {
    return {
      success: false,
      message: "task not found " + err,
    };
  }
};

module.exports.addProjectTask = async function (idProject, body) {
  try {
    let task = new Task({
      title: body.title,
      desc: body.desc,
      state: "A faire",
    });

    let project = await Project.findById(idProject);
    project.tasks.push(task._id);

    console.log(project);
    console.log(task);

    project
      .save()
      .then((doc) => {})
      .catch((err) => {});
    task
      .save()
      .then((doc) => {})
      .catch((err) => {});

    return {
      success: true,
      data: project,
    };
  } catch (err) {
    return {
      success: false,
      message: "can not add Task " + err,
    };
  }
};
