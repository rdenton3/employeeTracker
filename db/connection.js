// Connect to database
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'employees'
    },
    // console.log('Connected to the election database.')
  );

  
module.exports = db;