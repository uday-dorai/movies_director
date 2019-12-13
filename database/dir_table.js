const mysql = require('mysql');
const log = console.log;
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'uday243#',
  database: 'movies_director'
});

con.connect((err) => {
  if (err) throw err;
  log('Connected!');
  const sql = 'CREATE TABLE dir_table (movie_Rank INT(10) not null auto_increment, Director VARCHAR(50), primary key (movie_Rank))';
  con.query(sql, (err) => {
    if (err) throw err;
    log('Table created');
  });
});