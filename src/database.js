const mysql = require("mysql");

const mysqlConnection = mysql.createPool({
    acquireTimeout: 5000,
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
});

module.exports = mysqlConnection;