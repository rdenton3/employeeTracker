const inquirer = require('inquirer');
const db = require('./db/connection.js');
// const mysql = require('mysql2');
const table = require('console.table');

async function init() {
    let response = await inquirer.prompt([{
        type: 'checkbox',
        name: 'choice1',
        message: 'What would you like to do?',
        choices: ['View all departments.', 'View all roles.','View all employees.','Add a department.','Add a role.','Add an employee.','Update an employee role.']
    }])
    if (response.choice1 == 'View all departments.') {
        const sql = `SELECT * FROM dept`;
        db.query(sql, (err, rows) => {
            console.table(rows)
            console.log(rows)
        });
    }
    else if (response.choice1 == 'View all roles.') {
        const sql = `SELECT * FROM employeeRole`;
        db.query(sql, (err, rows) => {
            console.table(rows)
            console.log(rows)
        });
    }
    else if (response.choice1 == 'View all employees.') {
        const sql = `SELECT * FROM employeeInfo`;
        db.query(sql, (err, rows) => {
            console.table(rows)
            console.log(rows)
        });
    }
    else if (response.choice1 == 'Add a department.') {
        let response2 = await inquirer.prompt([{
            type: 'input',
            name: 'choice2',
            message: 'What is the name of the department?'
        }])
        let params = response2.choice2
        console.log(params)
        const sql = `INSERT INTO dept (name) VALUES(?)`;
        db.query(sql, params, (err, rows) => {
            console.log('Department successfully added.')
        });
    }
    else if (response.choice1 == 'Add a role.') {
        let responseRole = await inquirer.prompt([{
            type: 'input',
            name: 'choice2',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'choice3',
            message: 'What is the salary for the role?'
        },
        {
            type: 'input',
            name: 'choice4',
            message: 'What department is the department ID?'  
        }
    ])
        let params = []
        params.push(responseRole.choice2,responseRole.choice3,responseRole.choice4)
        console.log(params)
        const sql = `INSERT INTO employeeRole (title,salary,dept_id) VALUES(?,?,?)`;
        db.query(sql, params, (err, rows) => {
            console.log('Role successfully added.')
        });
    }
    // switch (response.choice1) {
    //     case 'View all departments.':
    //         console.log('view dept check');
    //     case 'View all roles.':
    //         console.log('view roles')
    // }
    // console.log(response)
    // console.log(response.name)
    // console.log(response.action1)
}

init();
