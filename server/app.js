var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');


var books = require('./routes/books');
var customers = require('./routes/customers')
// var answers = require('./routes/answers')
// var votes = require('./routes/votes')
// var logins = require('./routes/logins')

var app = express();

app.use(logger('dev'))
mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/mongooseCrud');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/api/books', books)
app.use('/api/customers', customers);
// app.use('/api/user', users);
// app.use('/api/answer', answers);
// app.use('/api/vote', votes);

module.exports = app
