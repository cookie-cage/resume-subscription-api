var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./resources/index');
var healthcheck = require('./resources/healthcheck');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/healthcheck', healthcheck);

app.listen(process.env.APP_PORT, function(){
    console.log('listening on port:' + process.env.APP_PORT);
});
