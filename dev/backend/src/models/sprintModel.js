const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({
    number : {type : Number},
    name : { type : String },
    tasks : [{type : mongoose.Schema.Types.ObjectId , ref: "Task"}]



});

module.exports = mongoose.model('Sprint',sprintSchema);