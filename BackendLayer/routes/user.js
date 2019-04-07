const express =require('express');
const userRouter = express.Router();
const User = require('../models/user');
// const jwt = require('jsonwebtoken');

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

userRouter.post('/register', function (req, res, next) {
    let user = new User(req.body);
    User.create(user)
        .then(user => {
            res.status(200).json({'Result': 'User added successfully'});
        })
        .catch(err => {
            console.log("Cannot add user");
            res.status(400).send(err);
        });
})

module.exports = userRouter;
