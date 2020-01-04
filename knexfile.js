// Update with your config settings.
require('dotenv').config()

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
    connection: 'postgres://tsvbmuqbarhdoz:1aabdc857196af23bed2af1c688ac8579c24093a5dd0f2ad92c041b92d2a59ec@ec2-174-129-33-88.compute-1.amazonaws.com:5432/d3ulh8q9euvlqg',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/'
    },
    useNullAsDefault: true
  }
};
