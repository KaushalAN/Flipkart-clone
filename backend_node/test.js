const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',       // Your MySQL server's hostname
    user: 'root',       // Your MySQL username
    password: 'admin@123',   // Your MySQL password
    database: 'ecommerce',   // Your MySQL database name
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
        return;
    }
    console.log('Connected to MySQL database.');
});



