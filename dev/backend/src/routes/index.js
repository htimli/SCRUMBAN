const router = require('express').Router(); 


const {getAllUsers, addUser} = require('../controllers/userController');



router.route('/users/all').get( async(req,res ) => {
    let response = await getAllUsers();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
});
router.route('/users/addOne').get( async(req,res ) => {
    let response = await addUser();
    if(response.success == true){
        res.status(200).json(response);
    }else {
        res.status(404).json(response);
    }
});


router.get('/',function (req, res){
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
});



module.exports = router