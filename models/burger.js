//file will call on the predefined orm fns and use specific values
//require in orm fns
const orm = require('../config/orm.js');
const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(result) {
      cb(result);
    });
  },
  insertOne(columns, values, cb) {
    orm.insertOne('burgers', columns, values, function(result) {
      cb(result);
    });
  },
  updateOne(columnValue, idValue, cb) {
    orm.updateOne('burgers', columnValue, idValue, function(result) {
      cb(result);
    });
  }
};
//export the code for use in controller dir
module.exports = burger;
