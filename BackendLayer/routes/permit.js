const express =require('express');
const permitRouter = express.Router();
const Permit = require('../models/permit');

permitRouter.post('/', function (req, res, next) {
    Permit.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

permitRouter.get('/', function (req, res, next) {
    Permit.find(function (err, permit) {
        if (err) return next(err);
        res.json(permit);
    });
});

module.exports = permitRouter;
