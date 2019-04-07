const express = require('express');

const app = express();

const locationRoutes = express.Router();

// Require location model in our routes module
let Location = require('../models/location');

// Add location
locationRoutes.route('/').post(function (req, res, next) {
    Location.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
    // let location = new Location(req.body);
    // Location.save()
    //     .then(location => {
    //         res.status(200).json({'Result': 'location added successfully'});
    //     })
    //     .catch(err => {
    //         res.status(400).send({'Result': 'Unable to create location.'});
    //     });
});

// Get all location
locationRoutes.route('/getall').get(function (req, res, next) {
    Location.find(function (err, location) {
        if (err) return next(err);
        res.json(location);
    });
});

// Get Location By id
locationRoutes.route('/:id').get(function (req, res, next) {
    Location.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


// Update Location
locationRoutes.route('/:id').put(function(req, res, next){
    console.log("______________inside put_______________");
    console.log(req.body);
    Location.findByIdAndUpdate(req.params.id, req.body, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})
// Delete Location
locationRoutes.route('/:id').delete(function(req, res, next){
    Location.findByIdAndDelete(req.params.id, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})

module.exports = locationRoutes;
