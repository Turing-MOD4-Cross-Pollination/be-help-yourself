var express = require('express');
var path = require('path');
require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];

var indexRouter = require('./routes/index');

var app = express();

var graphqlHTTP = require('express-graphql');


var app = express();


var schema = require('./schema.js');

app.use(
  '/resources',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening for requests on port 4000")
});

module.exports = app;
