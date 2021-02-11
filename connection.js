var mysql = require('mysql');

// create connection database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_node_api'
});

conn, connect((err)=>{
    if(err) throw err;
    console.log('Database Connected')
});

module.exports = conn;