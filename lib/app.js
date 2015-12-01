var express = require('express');
var nameDB = require('./name-db');
var _s = require('underscore.string');

var app = express();
var server;

var start = exports.start = function start(port, callback) {
    server = app.listen(port, callback);
};

var stop = exports.stop = function stop(callback) {
  server.close(callback);
};

app.get(
    '/hello',
    function sendReponse(req, res) {
        res.status(200).send("Hello World!");
    }
);

app.get(
    '/greetings',
    function sendReponse(req, res) {
        var names = nameDB.getRandomNames(3);
        var greeting = 'Greetings from ' + _s.toSentenceSerial(names) + '!';
        res.status(200).send(greeting);
    }
);