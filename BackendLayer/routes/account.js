const express = require('express');

const app = express();

const accountRoutes = express.Router();

// Require Account model in our routes module
let Account = require('../models/account');

// Add Customer
accountRoutes.route('/addAccount').post(function (req, res) {
    let account = new Account(req.body);
    console.log(account);
    Account.create(account)
        .then(account => {
            res.status(200).json({message:'success','Result': 'Account added successfully'});
        })
        .catch(err => {
            res.status(400).send({message:'unsuccess','Result': 'Unable to create account.'});
        });
});

// Get all accounts
accountRoutes.route('/getallAccounts').get(function (req, res, next) {
    console.log('in backend route page');
    Account.find(function (err, account) {
        if (err) return next(err);
        res.json(account);
    });
});

// Get Account By id
accountRoutes.route('/:id').get(function (req, res, next) {
    Account.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


// Update Account
accountRoutes.route('/:id').put(function(req, res, next){
    Account.findByIdAndUpdate(req.params.id, req.body, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})
// Delete Account
accountRoutes.route('/:id').delete(function(req, res, next){
    Account.findByIdAndDelete(req.params.id, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})

module.exports = accountRoutes;
