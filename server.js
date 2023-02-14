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

db.connect((err) => {
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
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Exit"]
        }
    ])
        .then((response) => {
            switch (response.userChoice) {
                case "View All Departments":
                    viewAlldept();
                    break;
                case "View All Roles":
                    viewAllroles();
                    break;
                case "View All Employees":
                    viewAllEmp();
                    break;
                case "Add Department":
                    addDept();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
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

const viewAlldept = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log(`\n`);
        console.log('\x1b[33m Viewing All Departments: \x1b[0m');
        console.log(`\n`);
        console.table(rows);
        employeePrompt();
    })
};

const viewAllroles = () => {
    const sql = `SELECT role.title, role.id, department_name, role.salary FROM role
    LEFT JOIN department ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log(`\n`);
        console.log('\x1b[33m Viewing All Roles: \x1b[0m');
        console.log(`\n`);
        console.table(rows);
        employeePrompt();
    })
};

const viewAllEmp = () => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, employee.manager_id FROM employee 
    LEFT JOIN role ON employee.role_id = role.id
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

const addDept = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, async (err, res) => {
        if (err) throw err;
        res = res.map(({ id, department }) => ({

            value: id,
            name: department,

        }));
        await inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is the department id?",
            },
            {
                type: "input",
                name: "deptName",
                message: "What is the department name?",
            },
        ])

            .then((res) => {
                const sql = `INSERT INTO department SET ?`;
                db.query(sql, {
                    id: res.id,
                    title: res.title,
                    salary: res.salary,
                    department_id: res.department_id,
                })

                console.log(`\n`);
                console.log('\x1b[33m New department Has Been Added. \x1b[0m');
                console.log(`\n`);
                console.table(res);
                employeePrompt();
            });

    })
};

const addRole = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, async (err, res) => {
        if (err) throw err;
        res = res.map(({ id, title, salary, department_id }) => ({

            value: id,
            title: title,
            salary: salary,
            department: department_id,

        }));
        await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the role title?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the role id?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the role salary?",
            },
            {
                type: "list",
                name: "departmentId",
                message: "What is the role department?",
                choices: [
                    "1 Programming",
                    "2 Sales",
                    "3 Creative",
                    "4 Marketing",
                    "5 Finance",
                    "6 Legal"]
            },

        ])

            .then((res) => {
                const sql = `INSERT INTO role SET ?`;
                db.query(sql, {
                    id: res.id,
                    title: res.title,
                    salary: res.salary,
                    department_id: res.department_id,
                })
                console.log(`\n`);
                console.log('\x1b[33m New Role Has Been Added. \x1b[0m');
                console.log(`\n`);
                console.table(res);
                employeePrompt();
            });

    })
};

const addEmployee = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, async (err, res) => {
        if (err) throw err;
        res = res.map(({ id, first_name, last_name, role_id, manager_id }) => ({

            value: id,
            first_name: first_name,
            last_name: last_name,
            role: role_id,
            manager: manager_id,

        }));
        await inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employees first name?",
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employees last name?",
            },
            {
                type: "input",
                name: "role",
                message: "What is the employees role?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the employees id?",
            },
            {
                type: "input",
                name: "manager",
                message: "Who is the employees manager id?",
            },
        ])

            .then((res) => {
                const sql = `INSERT INTO employee SET ?`;
                db.query(sql, {

                    id: res.id,
                    first_name: res.first_name,
                    last_name: res.last_name,
                    role: res.role_id,
                    manager: res.manager_id,

                })

                console.log(`\n`);
                console.log('\x1b[33m New Employee Has Been Added. \x1b[0m');
                console.log(`\n`);
                console.table(res);
                employeePrompt();
            });

    })
};
