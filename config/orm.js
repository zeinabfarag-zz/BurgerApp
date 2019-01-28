///making functions to be executed on server.js
const connection = require('./connection.js');
// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  }

  return arr.toString();
}
const orm = {
  //fn to get all entries
  selectAll: function(tableName, cb) {
    var queryString = 'SELECT * FROM ' + tableName + ';';
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // Fn to insert a single table entry
  insertOne: function(tableName, columns, values, cb) {
    // Construct the query string that inserts a single row into the target table
    var queryString = 'INSERT INTO ' + tableName;
    queryString += ' (';
    queryString += columns.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(values.length);
    queryString += ') ';
    //database query
    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      // return results in callback
      cb(result);
    });
  },
  // Fn to update  single table entry
  updateOne: function(tableName, columnValue, idValue, cb) {
    // Construct the query string that updates a single entry in the target table
    var queryString = 'UPDATE ' + tableName;

    queryString += ' SET ';
    queryString += objToSql(columnValue);
    queryString += ' WHERE ';
    queryString += idValue;

    // console.log(queryString);

    // Perform the database query
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // Return results in callback
      cb(result);
    });
  }
};
module.exports = orm;
