const fs = require('fs');

module.exports = {
  development: {
    database: "community_connect_dev",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    dialect: "postgres",
    host: "127.0.0.1",
    username: "root",
    password: null,
    database: "database_production",
  }
};
