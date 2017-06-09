'use strict';

var mongoose = require('mongoose');
require('../models/subscription.js');

module.exports = function (next) {
    mongoose.connect(process.env.MONGO_URI, next);
};
