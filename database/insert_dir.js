const fs = require('fs');
const mysql = require('mysql');
const log = console.log;


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'uday243#',
  database: 'movies_director'
});


let content = fs.readFileSync("movies.json");
let moviesjson = JSON.parse(content);

//console.log(values);
con.connect((err) => {
    if (err) throw err;
    log('Connected!');
    const sql = 'INSERT INTO dir_table(movie_Rank, Director) VALUES ?';
    let values =[];
    for (const i in moviesjson) {
        values[i] =[];
        values[i].push(moviesjson[i]['Rank'],moviesjson[i]['Director']);
         }
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});