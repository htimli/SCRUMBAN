const User = require('../models/userModel');
const Project = require('../models/projectModel');



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

    } catch (err) {
        return { success: false, message: "Users not found " + err };
    }
}


module.exports.addUser = async function(body) {
    try {

        let user = await User.findOne({
            email: body.email
        });
        if (user) {
            return {
                success: false,
                msg: "email Already Exists"
            }
        }


        console.log(body);

        user = new User({
            ...body
        });

        user.save()
            .then(doc => {})
            .catch(err => {});

        return {
            success: true,
            data: user

        }

    } catch (err) {
        return { success: false, message: "cannot add user " + err };
    }

}
module.exports.updateUser = async function() {
    try {

        await User.updateOne({ _id: '618cf9a4bdbd06f5bb3523d6' }, { userName: "soso" })
            .then(doc => {})
            .catch(err => {});

        return {
            success: true,
        }

    } catch (err) {
        return { success: false, message: "cannot update user " + err };
    }
}

module.exports.removeUser = async function() {
    try {

        await User.deleteOne({ _id: '618cf9a0bdbd06f5bb3523d4' })
            .then(doc => {})
            .catch(err => {});

        return {
            success: true,
        }

    } catch (err) {
        return { success: false, message: "cannot remove user " + err };
    }
}

module.exports.getUserLogin = async function(body) {
    try {

        let user = await User.findOne({
            email: body.email,
            password: body.password
        });

        if (!user) {
            return {
                success: false,
                msg: "user does not exists"
            }
        } else {
            return {
                success: true,
                data: user
            }
        }

    } catch (err) {
        return { success: false, message: "cannot find user " + err };
    }

}