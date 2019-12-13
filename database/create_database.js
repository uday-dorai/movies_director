var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "uday243#"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE movies_director", function (err, result) {
   if (err) throw err;
   console.log("Database created");
  });
})