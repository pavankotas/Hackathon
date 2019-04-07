const express =require('express');
const userRouter = express.Router();
const User = require('../models/user');

//get user details by Email Id

userRouter.post('',function (req, res, next) {
    let user = new User(req.body);
    User.findOne({emailID : user.emailID}, function (err, data) {
        if( data != null ) {
            if (user.password == data.password) {
                console.log({message: "success",userID:data.emailID, userType: data.userType});
                res.json({message: "success",userID:data.emailID, userType: data.userType});
            } else {
                res.json({message:"Invalid credentials"});
            }
        }
        else{
            res.json({message:'User doesnot exists'});
        }
    });
})
// Get all accounts
userRouter.route('/getallAccounts').get(function (req, res, next) {
    console.log('in backend route page');
    User.find({ "userType" : "Organization Admin"},function (err, account) {
        if (err) return next(err);
        res.json(account);
    });
});
// Get all patraol Users
userRouter.route('/getallPatrolUsers').get(function (req, res, next) {
    console.log('in backend route page');
    User.find({ "userType" : "Patrol"},function (err, account) {
        if (err) return next(err);
        res.json(account);
    });
});

userRouter.post('/register', function (req, res, next) {
    let user = new User(req.body);
console.log(user);
    User.create(user)
        .then(user => {
            res.status(200).json({message:"success",'Result': 'User added successfully'});
        })
        .catch(err => {
            console.log("Cannot add user");
            res.status(400).json({message:"notsuccess"});
        });
})

module.exports = userRouter;
