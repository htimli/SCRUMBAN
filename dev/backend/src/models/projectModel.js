const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: { type: String },
    creationDate: { type: Date },
    scrumMaster: { type: String },
    progress: { type: Number },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    sprints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sprint" }]
});


module.exports = mongoose.model('Project', projectSchema);