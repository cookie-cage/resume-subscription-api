'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Subscription = mongoose.model('Subscription');

router.post('/', function(req, res, next) {

    Subscription.create(req.body, function(err, data){
        if (err) {
            res.body = err;
            return res.status(400).json(err);
        }

        res.status(201).json(data);
    });

});

router.get('/', function(req, res, next) {

    Subscription.find(function(err, data){
        res.status(200).json(data);
    });

});

router.delete('/', function(req, res, next) {

    Subscription.remove(req.params.id, function(err, data){
        if(err)
            return res.status(400).json(err);

        res.status(202).send(data);
    });
});

router.get('/:id', function(req, res, next) {

    Subscription.findById(req.params.id, function(err, data){
        if(!data)
            return res.status(404).send();

        res.status(200).json(data);
    });

});

router.delete('/:id', function(req, res, next) {

    Subscription.findByIdAndRemove(req.params.id, function(err, data){
        if(err)
            return res.status(400).json(err);

        if(!data)
            return res.status(404).send();

        res.status(202).send(data);
    });
});


module.exports = router;
