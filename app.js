var express = require('express');
var path = require('path');
const graphqlHTTP = require('express-graphql');

// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('./knexfile')[environment];
var db = require('./db');
// var indexRouter = require('./routes/index');
var schema = require('./schema.js');

var app = express();
 
app.use(
  '/resources',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
 
app.listen(4000);

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);

// app.use('/')


module.exports = app;
