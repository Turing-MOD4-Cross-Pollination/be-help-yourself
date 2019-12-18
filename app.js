import express from 'express';
import path from 'path';
import graphqlHTTP from 'express-graphql';

import db from './db';
import schema from './schema.js';

var app = express();
 
app.use(
  '/resources',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
 
app.listen(4000);

export default app;
