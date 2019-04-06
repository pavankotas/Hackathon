const express = require('express');

const app = express();

const accountRoutes = express.Router();

// Require customer model in our routes module
let Account = require('../models/account');

// Add Customer
accountRoutes.route('/add').post(function (req, res) {
    let account = new Account(req.body);
    Account.save()
        .then(customer => {
            res.status(200).json({'Result': 'Account added successfully'});
        })
        .catch(err => {
            res.status(400).send({'Result': 'Unable to create account.'});
        });
});

// Get all accounts
accountRoutes.route('/getall').get(function (req, res, next) {
    Account.find(function (err, accounts) {
        if (err) return next(err);
        res.json(accounts);
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
