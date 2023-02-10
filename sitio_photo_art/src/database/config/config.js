module.exports = {
  development: {
    username: "root",
    password: null,
    //password: root,
    database: "sitiofotodb",
    host: "127.0.0.1",
    //host: "127.0.0.1.8889",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
