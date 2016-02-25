'use strict';

var express = require('express');
var app = express();

var PORT = process.env.PORT || 4000;
var greeter = require('./greeter');

app.get('/', function (req, resp) {
	resp.send(greeter('Hello world'));
});

app.listen(PORT, function () {
	console.log('server has been started' + PORT);
});