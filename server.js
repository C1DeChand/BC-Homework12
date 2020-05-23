var inquirer = require("inquirer");
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "homework12",

  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    mainMenu()
  });

function mainMenu () {

    return inquirer.prompt ([

        {
            type:"rawlist",
            name:"mainMenu",
            message:"Employee Management Tool Main Menu",
            choices:["Create New Department", 
                     "Create New Position", 
                     "Create New Employee", 
                     "View All Deparements", 
                     "View All Positions", 
                     "View All Employees", 
                     "Update Employee",
                     "Exit"
            ]
        }

    ]).then(function (data, err) {

        if (data.mainMenu === "Create New Department") {
            newDept()
        }

        if (data.mainMenu === "Create New Position") {
            newRole()
        }

        if (data.mainMenu === "Create New Employee") {
            newEmp()
        }

        if (data.mainMenu === "View All Deparements") {
            viewDepts()
        }

        if (data.mainMenu === "View All Positions") {
            viewRoles()
        }

        if (data.mainMenu === "View All Employees") {
            viewEmps()
        }

        if (data.mainMenu === "Update Employee") {
            updateEmp()
        }

        if (data.mainMenu === "Exit") {
            endOfLine()
        }

        if (err) throw err;

    })

}

function newDept () {

    return inquirer.prompt([

        {
            type:"input",
            name:"newDept",
            message: "What is the name of the new department? (30 Characters Max)"
        }

    ]).then(function (data, err) {

        var query = connection.query(

            "INSERT INTO department SET ?", {name: data.newDept}, function(err, res) {

              if (err) throw err;

            }

        );

        console.log(query.sql);
        
        console.log("Deparetment Added.")

        if (err) throw err;

        mainMenu()

    })

}

function viewDepts () {

    
    connection.query("SELECT * FROM department", function(err, res) {

        if (err) throw err;
        
        console.log(res);

    })

    mainMenu()

}

function endOfLine () {
    connection.end()
}