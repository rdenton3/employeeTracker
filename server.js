const inquirer = require('inquirer');
const db = require('./db/connection.js');
// const mysql = require('mysql2');
const table = require('console.table');

async function init() {
    let response = await inquirer.prompt([{
        type: 'checkbox',
        name: 'choice1',
        message: 'What would you like to do?',
        choices: ['View all departments.', 'View all roles.','View all employees.','Add a department.','Add a role.','Add an employee.','Update an employee role.', 'Finish.']
    }])
    // view all departments
    if (response.choice1 == 'View all departments.') {
        const sql = `SELECT * FROM dept`;
        db.query(sql, (err, rows) => {
            console.table(rows)
            init();
        });
        
    }
    // view all roles
    else if (response.choice1 == 'View all roles.') {
        const sql = `SELECT * FROM employeeRole`;
        db.query(sql, (err, rows) => {
            console.table(rows)
            init();
        });
        
    }
    // view all employees and return employees table
    else if (response.choice1 == 'View all employees.') {
        const sql = `SELECT * FROM employeeInfo`;
        db.query(sql, (err, rows) => {
            console.table(rows)
            init();
        });
    }
    // add a department 
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
            init();
        });
        
    }
    // add a role
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
            init();
        });
        
    }
    // add an employee
    else if (response.choice1 == 'Add an employee.') {
        let responseEmployee = await inquirer.prompt([{
            type: 'input',
            name: 'choice2',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'choice3',
            message: 'What is the last name of the employee?'
        },
        {
            type: 'input',
            name: 'choice4',
            message: 'What is the manager ID?'  
        },
        {
            type: 'input',
            name: 'choice5',
            message: 'What is the role ID?'  
        },
        {
            type: 'input',
            name: 'choice6',
            message: 'What is the department ID?'  
        }
    ])
        let params = []
        params.push(responseEmployee.choice2,responseEmployee.choice3,responseEmployee.choice4,responseEmployee.choice5,responseEmployee.choice6)
        console.log(params)
        const sql = `INSERT INTO employeeInfo (first_name,last_name,manager_id,role_id,dept_id) VALUES(?,?,?,?,?)`;
        db.query(sql, params, (err, rows) => {
            console.log('Employee successfully added.')
            init();
        });
    }
        // update employee role
        else if (response.choice1 == 'Update an employee role.') {
            const sql = `SELECT id FROM employeeInfo`;
            const sql2 = `SELECT * FROM employeeRole`;
            employeeOptions = []

            let [employeesArr] = await db.promise().query(sql)
            employeesArr.forEach(employee => 
                employeeOptions.push(employee.id))
        
            let [rolesArr] = await db.promise().query(sql2)
            const roleOptions = rolesArr.map(({ title, id }) => ({
                name: title,
                value: id,
              }));

            // let user designate which employee they want to update
            let chooseEmployee = await inquirer.prompt([{
                type: 'checkbox',
                name: 'choice1',
                message: 'Which employee ID would you like to update?',
                choices: employeeOptions
            },
            {
                type: 'checkbox',
                name: 'choice2',
                message: 'What would you like the new role to be?',
                choices: roleOptions
            }
        ])

        let params = []
        params.push(chooseEmployee.choice2,chooseEmployee.choice1)
        console.log(params)
        const sql3 = `UPDATE employeerI SET role_id = ? WHERE id = ?`;
        db.query(sql, params, (err, rows) => {
            console.log('Employee successfully updated.')
            init();
        });

        }
    else if (response.choice1 == 'Finish.') {
        console.log('Finished.')
    }
    }


init();
