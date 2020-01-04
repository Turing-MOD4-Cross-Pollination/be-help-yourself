// Update with your config settings.

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
    dialect: "postgres",
    host: process.env.RDS_HOSTNAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME,
  },
  staging: {
    client: 'pg',
    connection: 'postgres://rliwwgvberzagx:440b196e46606c228a179cc597fca632371526ed795cefffee8c6707082a259c@ec2-184-73-169-163.compute-1.amazonaws.com:5432/dftv5q2jck251l',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/'
    },
    useNullAsDefault: true
  }
};
