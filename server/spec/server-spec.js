/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'cowlist'
    });
    dbConnection.connect();

    //var tablename = "messages"; // TODO: fill this out
    var tablename = "cows"; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });



  afterEach(function() {
    dbConnection.end();
  });


  it('Should insert posted cows to the DB', function(done) {

  request({
    method: 'POST',
    uri: 'http://127.0.0.1:3000/classes/cows',
    json: { name: 'cow1', description: 'my name is cow1' }
    },
      function () {
      var queryString = 'SELECT * FROM cows';
      var queryArgs = [];

      dbConnection.query(queryString, queryArgs, function(err, results) {
        // Should have one result:
        expect(results.length).to.equal(1);

        // TODO: If you don't have a column named text, change this test.
        expect(results[0].description).to.equal('my name is cow1');

        done();
      });
    });
  });



  it('Should output all cows from the DB', function(done) {
    // Let's insert a message into the db
    var queryString = "insert into cows (name, description) value ( ? , ?)";
    var queryArgs = ['cow2', 'this is cow2' ];

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/cows', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].name).to.equal('cow2');
        expect(messageLog[0].description).to.equal('this is cow2');
        done();
      });
    });
  });

});
