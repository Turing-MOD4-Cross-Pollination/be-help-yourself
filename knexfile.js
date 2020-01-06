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
    client: "postgres",
    host: process.env.RDS_HOSTNAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME,
  },
  staging: {
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
