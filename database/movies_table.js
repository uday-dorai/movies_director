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
  const sql = 'CREATE TABLE movies_dir (movie_Rank INT(10) not null auto_increment, movie_Title VARCHAR(70), movie_Descript VARCHAR(250), movie_Runtime INT(10), Genre VARCHAR(50), Rating FLOAT(20), Metascore INT(10), Votes INT(20), Gross_Earning_in_Mil FLOAT(20), Director VARCHAR(50), Actor VARCHAR(50), Year int(10), primary key (movie_rank))';
  con.query(sql, (err) => {
    if (err) throw err;
    log('Table created');
  });
});