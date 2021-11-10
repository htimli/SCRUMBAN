const User = require('../models/userModel');



module.exports.getAllUsers = async function() {
    let total = await User.countDocuments({});
    let limit = parseInt(total);


    try {
        const users = await User.find().limit(limit);
        return {
            success: true,
            data: users,
            total: total.toString(),
        }

    }catch(err){
        return { success:false , message: "Users not found "+err };
    }
}


module.exports.addUser = async function(){

   

    try{
        const user  = new User({userName : 'tati', password: 'rrkr'  });
        
        user.save()
        .then(doc => {})
        .catch(err => {});

        return {
            success: true,
            data: user
            
        }


    }catch (err){
        return { success:false , message: "cannot add user "+err };
    }

}

