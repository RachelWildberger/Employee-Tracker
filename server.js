const mysql = require("mysql2");
const inquirer = require("inquirer");
const consTable = require("console.table");
require("dotenv").config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker_db'
  });

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the Employee Database!!!!!")
    startPrompt();
});

const startPrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "Exit"]
        }
    ])
        .then((response) => {
            switch (response.userChoice) {
                case "View All Employees":
                    viewEmployee();
                    break;
                case "Add Employee Role":
                    addEmployee();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "Add Department":
                    addDepartment();
                case "Exit":
                    connection.end();
                    break;
            }
        })
        .catch((err) => {
            if(err)throw err;
        })
};

const viewEmployee = () => {
    console.log("Viewing all employees\n");

    const query = 
    `SELECT 
        employee.id,
        employee.first_name,
        employee.last_name,
        role.title,
        department.department_name

        
        `
};