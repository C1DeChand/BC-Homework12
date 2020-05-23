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
            // newEmp()
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
            // updateEmp()
        }

        if (data.mainMenu === "Exit") {
            endOfLine()
        }

        if (err) throw err;

    })

};

// Creates new Departments.

function newDept () {

    return inquirer.prompt([

        {
            type:"input",
            name:"newDept",
            message: "What is the name of the new department? (30 Characters Max)"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        var query = connection.query(

            "INSERT INTO department (name) VALUES (?)", [data.newDept], function(err, res) {

                if (err) throw err;

                console.log("Deparetment Added.")

                turnBack()

            }

        );

        console.log(query.sql);

    })

};

// Creates new positions in departments.

function newRole () {

    return inquirer.prompt([

        {
            type:"input",
            name:"newRole",
            message: "What is the title of the New Position? (30 Characters Max)"
        },
        {
            type:"input",
            name:"salary",
            message: "What is the salary of the New Position? (Numbers Only, No Punctuation)"
        },
        {
            type:"input",
            name:"deptId",
            message: "What is the department ID that the New Position belongs to? (If Unknown, View Departments from the Main Menu.)"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        var query = connection.query(

            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [data.newRole, data.salary, data.deptId], function(err, res) {

                if (err) throw err;

                console.log("Position Added.")

                turnBack()

            }

        );

        console.log(query.sql);

    })

};

// View all Departments

function viewDepts () {

    
    connection.query("SELECT * FROM department", function(err, res) {

        if (err) throw err;
        
        console.log(res);

        turnBack()

    })

};

// View all Roles

function viewRoles () {

    
    connection.query("SELECT * FROM role", function(err, res) {

        if (err) throw err;
        
        console.log(res);

        turnBack()

    })

};

// View all Employees

function viewEmps () {

    
    connection.query("SELECT * FROM employee", function(err, res) {

        if (err) throw err;
        
        console.log(res);

        turnBack()

    })

};

// Returns to the main menu or exits the application

function turnBack () {

    return inquirer.prompt ([

        {
            
            type:"rawlist",
            name:"back",
            message:"Back or Exit?",
            choices:["Back", "Exit"]

        }

    ]).then(function (data, err) {

        if (err) throw err;
        
        if (data.back === "Back") {

            mainMenu()

        }

        if (data.back === "Exit") {

            endOfLine()
            
        }

    })

};

// Exits the application

function endOfLine () {
    connection.end()
};