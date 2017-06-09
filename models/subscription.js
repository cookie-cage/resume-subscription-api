'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Subscription = new Schema({
    id: ObjectId,
    updated_at: Date,
    created_at: Date,

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

mongoose.model('Subscription', Subscription);
