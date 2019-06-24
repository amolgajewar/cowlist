var models = require('../models');
module.exports = {
  cows: {
    get: function (req, res) {
      console.log('inside cows get controllers ' + JSON.stringify(req.body));

      models.cows.get(function(err, results) {
        if(err) {
          console.log(err);
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('inside cows post controllers ' + JSON.stringify(req.body));

      var params = [req.body['name'], req.body['description']];
      models.cows.post(params, function(err, results) {
        if(err) {
          console.log(err);
        }
        res.json(results);
      });
    }
  }
};

