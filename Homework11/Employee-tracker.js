var inquirer = require ("inquirer");
var mysql  = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Eagles#27",
    database: "Employee_Tracker"
  }); 

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
    displaychoices()
  })

function displaychoices(){





inquirer.prompt([{
type: "list",
name: "userchoices",
message: "what do you want to do",
choices:["allemployees", "alldepartments", "allroles", "removeemployee", "updateemployee"]

}])
.then(function(response){
    switch(response.userchoices){
        case"allemployees": 
        displayemployees()



    }

})
}
function displayemployees(){
connection.query("select * from Employees", function(error,response){
if (error) throw error;
console.log(response)




})




}
