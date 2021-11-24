const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    titre: {type: String},
    creationDate: {type:Date}, 
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]

}); 


module.exports = mongoose.model('Project',projectSchema);


