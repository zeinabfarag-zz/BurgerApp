const mysql = require('mysql');
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'password1',
    database: 'burgers_db'
  });
}
connection.connect(function(err) {
  if (err) {
    // return status(500).end();
    console.log(err);
    throw err;
  }
  console.log(`Connected : ${connection.threadId}`);
});
module.exports = connection;
