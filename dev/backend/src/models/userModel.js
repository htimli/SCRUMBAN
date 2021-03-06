const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName : {type : String},
    password : {type : String}, 
    email  :   {type : String},
    projects : [{type : mongoose.Schema.Types.ObjectId, ref: "Project"}]
    
});


module.exports = mongoose.model('User', userSchema);