const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",

  password: "Eagles#27",
  database: "employees"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
