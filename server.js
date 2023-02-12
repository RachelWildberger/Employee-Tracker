const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
require("dotenv").config();

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker_db'
});

db.connect(function (err) {
    if (err) throw err;
    console.log(`\n`);
    console.log('\x1b[33m Connected to the Employee Database! \x1b[0m');
    console.log(`\n`);
    employeePrompt();
});

const employeePrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View Employees by Department",
                "Add Role",
                "Add Employee",
                "Update Employee",
                "Remove Employee",
                "Exit"]
        }
    ])
        .then((response) => {
            switch (response.userChoice) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View Employees by Department":
                    employeeByDep();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee":
                    updateEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Exit":
                    db.end();
                    break;
            }
        })
        .catch((err) => {
            if (err) throw err;
        })
};

const viewAllEmployees = () => {
    const sql = `SELECT employee.first_name, employee.last_name, role.title, department.department_name, role.salary
    FROM employee LEFT JOIN role ON employee.role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log(`\n`);
        console.log('\x1b[33m Viewing All Employees: \x1b[0m');
        console.log(`\n`);
        console.table(rows);
        employeePrompt();
    })
};

const employeeByDep = () => {
    const sql = `SELECT department.department_name, employee.first_name, employee.last_name, role.title, role.salary 
    FROM employee LEFT JOIN role ON employee.role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id;`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log(`\n`);
        console.log('\x1b[33m Viewing Employees by Department: \x1b[0m');
        console.log(`\n`);
        console.table(rows);
        employeePrompt();
    })
};

const addRole = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, async (err, rows) => {
        if (err) throw err;
        rows = rows.map(row => {
            return {
                key: row.id,
                value: row.department_name,
            }
        });
        await inquirer.prompt([
            {
                type: "input",
                name: "roleTitle",
                message: "What is the role title?",
            },
            {
                type: "input",
                name: "roleSalary",
                message: "What is the role salary?",
            },
            {
                type: "list",
                name: "roleDepartment",
                message: "What is the role department?",
                choices: rows,
            },
            
        ])
        console.log(`\n`);
        console.log('\x1b[33m New Role Has Been Added. \x1b[0m');
        console.log(`\n`);
        console.table();
        employeePrompt();
    })
};

const addEmployee= () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, async (err, rows) => {
        if (err) throw err;
        rows = rows.map(row => {
            return {
                key: row.id,
                value: row.department_name,
            }
        });
        await inquirer.prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is the employees name?",
            },
            {
                type: "list",
                name: "employeeDepartment",
                message: "What is the employees department?",
                choices: rows,
            },
            {
                type: "input",
                name: "employeeRole",
                message: "What is the employees role?",
            },
            {
                type: "input",
                name: "employeeSalary",
                message: "What is the employees salary?",
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the employees id?",
            },
            {
                type: "input",
                name: "employeeManager",
                message: "Who is the employees manager?",
            },
            
        ])
        console.log(`\n`);
        console.log('\x1b[33m New employee Has Been Added. \x1b[0m');
        console.log(`\n`);
        console.table();
        employeePrompt();
    })
};

// const updateEmployee = () => {
//     const sql = ``;

//     db.query(sql, (err, rows) => {
//         if (err) throw err;
//         console.log('Data received from DB:');
//         console.table(rows);
//         employeePrompt();
//     })

// };

// const removeEmployee = () => {
//     const sql = ``;

//     db.query(sql, (err, rows) => {
//         if (err) throw err;
//         console.log('Data received from DB:');
//         console.table(rows);
//         employeePrompt();
//     })

// };