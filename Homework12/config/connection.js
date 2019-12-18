var mysql = require ("mysql")

var connection = mysql.createConnection({
 host: "localhost", 
 port: 3306, 
user: "root", 
password: "Eagles#27",
database: "burgers_db"



});

connection.connect(function(err){

    if(err)throw err 
    else console.log("databaseconected")

} )
module.exports = connection;
