const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title : {type : String},
    desc :  {type : String},
    state : {
        type : String ,
        enum : ['A faire' , 'En cours','A tester', 'Terminé'] ,
        default : 'A faire'       
    }

});

module.exports = mongoose.model('Task',taskSchema);