// Import express

var express = require('express');
var router = express.Router();

// Import burger.js
var burger = require('../models/burger');

// Create the router for the app
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log('data for select all' + JSON.stringify(hbsObject));
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne(['burger_name'], [req.body.burger_name], function() {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('iD of burger' + condition);
  burger.updateOne({ devoured: true }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.redirect('/');
    }
  });
});

// Export the router at the end
module.exports = router;
