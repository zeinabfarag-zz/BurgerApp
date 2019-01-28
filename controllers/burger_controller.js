//dependenices
const express = require('express');
//to avoid clustering of code, using router (mini apps) is better than using express.app
const router = express.Router();
//require in fns
const burger = require('../models/burger.js');
//create routers for app
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    //data is an array needs to be in an object to work with handlebars
    var burgersObject = { burgers: data };
    //console.log('SELECT ALL DATA TEST' + JSON.stringify(data));
    res.render('index', burgersObject);
  });
});
//adding in a new entry
router.post('/burgers', function(req, res) {
  burger.insertOne(['burger_name'], [req.body.burger_name], function() {
    res.redirect('/');
  });
});
//updating an entry
router.put('/burgers/:id', function(req, res) {
  var idValue = 'id = ' + req.params.id;
  console.log(`Burger id: ${idValue}`);
  burger.updateOne({ devoured: true }, idValue, function(result) {
    //if nothing is updated, end the connection
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.redirect('/');
    }
  });
});
module.exports = router;
