var db = require('../db');

module.exports = {
  cows: {
    get: function (callback) {
      var queryStr = 'select * from cows';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log('inside cows post models');
      var queryStr = 'insert into cows(name, description) values(?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }

}; // module.export
















// code before refactoring

// var queryString1 = 'INSERT INTO messages SET ?';

// db.query(queryString1, message, function(err, results) {

// if (err)  throw err
// });


// var queryString = 'INSERT INTO users SET username=?';
// var queryArgs = username;

// db.query(queryString, queryArgs, function(err, results) {

//   console.log('inside post : ' + queryString);
//   if (err)  throw err
// });