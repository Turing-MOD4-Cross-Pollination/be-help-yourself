var express = require('express');
var path = require('path');
require('dotenv').config();
const cors = require('cors');
var app = express();
var graphqlHTTP = require('express-graphql');
var schema = require('./schema.js');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
var indexRouter = require('./routes/index');

app.use(cors());

app.use(
  '/resources',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

if (process.env.NODE_ENV !== 'test') {
app.listen(process.env.PORT || 4000, () => {
  console.log("Listening for requests on port 4000")
});
}

module.exports = app;
