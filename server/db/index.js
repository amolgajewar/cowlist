//================= mysql version ===========//
//"sequelize": "^3.35.0"
var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowlist'
});

db.connect();

module.exports = db;