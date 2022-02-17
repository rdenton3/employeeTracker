const inquirer = require('inquirer');
const db = require('./db/connection.js');
// const mysql = require('mysql2');
const table = require('console.table');
const { async } = require('rxjs');

// const init = () => {
//     return inquirer.prompt([{
//         type: 'checkbox',
//         name: 'action1',
//         message: 'What would you like to do?',
//         choices: ['View all departments.', 'View all roles.','View all employees.','Add a department.','Add a role.','Add an employee.','Update an employee role.']
//     }
// ]).then(data => {
//     if (data.action1 == 'View all departments.') {
//         console.log('works')
//         const sql = `SELECT * FROM dept`;
//         db.query(sql, (err, rows) => {
//             console.table(rows)
//             console.log(rows)
//         });
//     }
// })}


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
// db.query(`SELECT * FROM dept`, (err, rows) => {
//     console.table(rows);
//   });