const usersrouter = require('express').Router(); 
;

const {getAllUsers, addUser , removeUser, updateUser } = require('../controllers/userController');


usersrouter.route('/all').get( async(req,res ) => {
    let response = await getAllUsers();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
});
usersrouter.route('/updateOne').get( async(req,res ) => {
    let response = await updateUser();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
});
usersrouter.route('/addOne').post( async(req,res ) => {
    let response = await addUser(req.body);
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
});
usersrouter.route('/deleteOne').delete( async(req,res ) => {
    let response = await removeUser();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
});

module.exports = usersrouter