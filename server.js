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
                     "View All Employees by Manager",
                     "Update Employee",
                     "Delete Department",
                     "Delete Position",
                     "Delete Employee",                     
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

        if (data.mainMenu === "View All Employees by Manager") {
            viewEmpsByMgr()
        }

        if (data.mainMenu === "Update Employee") {
            updateEmp()
        }

        if (data.mainMenu === "Delete Department") {
            deleteDept()
        }

        if (data.mainMenu === "Delete Position") {
            deleteRole()
        }

        if (data.mainMenu === "Delete Employee") {
            deleteEmp()
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

            "INSERT INTO department (name) VALUES (?);", [data.newDept], function(err, res) {

                if (err) throw err;

                console.log("Deparetment Added.")

                turnBack()

            }

        );

        console.log(query.sql);

    })

};

// Creates new Positions in Departments.

function newRole () {

    return inquirer.prompt([

        {
            type:"input",
            name:"newRole",
            message: "What is the title of the New Position? (30 Characters Max)"
        },
        {
            type:"integer",
            name:"salary",
            message: "What is the salary of the New Position? (Numbers Only)"
        },
        {
            type:"integer",
            name:"deptId",
            message: "What is the department ID that the New Position belongs to? (If Unknown, View Departments from the Main Menu.)"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        var query = connection.query(

            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);", [data.newRole, data.salary, data.deptId], function(err, res) {

                if (err) throw err;

                console.log("Position Added.")

                turnBack()

            }

        );

        console.log(query.sql);

    })

};

// Creates a new Employee in Positions.

function newEmp () {

    return inquirer.prompt([

        {
            type:"input",
            name:"firstName",
            message: "What is the first name of the New Employee? (30 Characters Max)"
        },
        {
            type:"input",
            name:"lastName",
            message: "What is the last name of the New Employee? (30 Characters Max)"
        },
        {
            type:"input",
            name:"roleId",
            message: "What is the Position ID that the New Employee belongs to? (If ID is Unknown, View Positions from the Main Menu.)"
        },
        {
            type:"input",
            name:"managerId",
            message: "What is the Manager ID that the New Employee belongs to? (Enter 0 if Employee is a Manager. If ID is Unknown, View Employees from the Main Menu.)"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        var query = connection.query(

            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);", [data.firstName, data.lastName, data.roleId, data.managerId], function(err, res) {

                if (err) throw err;

                console.log("Employee Added.")

                turnBack()

            }

        );

        console.log(query.sql);

    })

};

// View all Departments

function viewDepts () {

    
    connection.query("SELECT * FROM department;", function(err, res) {

        if (err) throw err;
        
        console.log(res);

        turnBack()

    })

};

// View all Roles

function viewRoles () {

    
    connection.query("SELECT * FROM role;", function(err, res) {

        if (err) throw err;
        
        console.log(res);

        turnBack()

    })

};

// View all Employees

function viewEmps () {

    
    connection.query("SELECT * FROM employee;", function(err, res) {

        if (err) throw err;
        
        console.log(res);

        turnBack()

    })

};

// View Employees by Manager

function viewEmpsByMgr () {

    return inquirer.prompt([

        {
            type:"input",
            name:"managerId",
            message: "What is the Manager ID that you want to search with? (Enter 0 if Employees are Managers. If ID is Unknown, View Employees from the Main Menu.)"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        connection.query("SELECT * FROM employee WHERE manager_id = ?;", [data.managerId], function(err, res) {

            if (err) throw err;
            
            console.log(res);
    
            turnBack()
    
        })

    })

};

// Update Employee Information

function updateEmp () {

    return inquirer.prompt([

        {
            type:"integer",
            name:"empSelect",
            message: "What is the Employee ID of the Employee you want to edit? (If ID is Unknown, View Employees from the Main Menu.)"
        },
        {
            type:"input",
            name:"firstName",
            message: "What is the first name of the New Employee? (30 Characters Max)"
        },
        {
            type:"input",
            name:"lastName",
            message: "What is the last name of the New Employee? (30 Characters Max)"
        },
        {
            type:"input",
            name:"roleId",
            message: "What is the Position ID that the New Employee belongs to? (If ID is Unknown, View Positions from the Main Menu.)"
        },
        {
            type:"input",
            name:"managerId",
            message: "What is the Manager ID that the New Employee belongs to? (Leave empty if Employee is a Manager. If ID is Unknown, View Employees from the Main Menu.)"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        var query = connection.query(

            "UPDATE employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ? WHERE id = ?;", [data.firstName, data.lastName, data.roleId, data.managerId, data.empSelect], function(err, res) {

                if (err) throw err;

                console.log("Employee Updated.")

                turnBack()

            }

        );

        console.log(query.sql);

    })

};

// Delete Department

function deleteDept () {

    return inquirer.prompt([

        {
            type:"integer",
            name:"deptId",
            message: "What is the ID number of the Department you want to Delete?"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        connection.query("DELETE FROM department WHERE id = ?;", [data.deptId], function(err, res) {

            if (err) throw err;
            
            console.log(res);
    
            turnBack()
    
        })

    })

};

// Delete Position

function deleteRole () {

    return inquirer.prompt([

        {
            type:"integer",
            name:"roleId",
            message: "What is the ID number of the Position you want to Delete?"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        connection.query("DELETE FROM role WHERE id = ?;", [data.roleId], function(err, res) {

            if (err) throw err;
            
            console.log(res);
    
            turnBack()
    
        })

    })

};

// Delete Employee

function deleteEmp () {

    return inquirer.prompt([

        {
            type:"integer",
            name:"empId",
            message: "What is the ID number of the Employeee you want to Delete?"
        }

    ]).then(function (data, err) {

        if (err) throw err;

        connection.query("DELETE FROM employee WHERE id = ?;", [data.empId], function(err, res) {

            if (err) throw err;
            
            console.log(res);
    
            turnBack()
    
        })

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