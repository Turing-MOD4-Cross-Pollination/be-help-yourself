// Update with your config settings.
require('dotenv').config()

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/community_connect_dev',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/community_connect_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
<<<<<<< HEAD
    connection: process.env.DATABSE_URL,
=======
    connection: process.env.DATABASE_URL || 'postgres://tsvbmuqbarhdoz:1aabdc857196af23bed2af1c688ac8579c24093a5dd0f2ad92c041b92d2a59ec@ec2-174-129-33-88.compute-1.amazonaws.com:5432/d3ulh8q9euvlqg',
>>>>>>> ab5011e835633e7e855990be8cddde51c8ef8fef
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/'
    },
    useNullAsDefault: true
  }
};
