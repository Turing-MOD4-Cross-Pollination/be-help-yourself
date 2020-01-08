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
    connection: process.env.DATABASE_URL || 'postgres://vjspyablvwgxek:f0cb940e34d7a21e6a505721db9bf56f86bd930ae645b3f92b345ff3c4653394@ec2-174-129-33-88.compute-1.amazonaws.com:5432/d7cv8o9kpo3cfn',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/'
    },
    useNullAsDefault: true
  }
};
