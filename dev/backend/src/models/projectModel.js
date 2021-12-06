const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: {type: String},
    creationDate: {type:Date}, 
    scrumMaster: {type: String},
    progress: {type: Number},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]

}); 


module.exports = mongoose.model('Project',projectSchema);


