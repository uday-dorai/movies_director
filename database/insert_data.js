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
    const sql = 'INSERT INTO movies_dir(movie_Rank, movie_Title, movie_Descript, movie_Runtime, Genre, Rating, Metascore, Votes, Gross_Earning_in_Mil, Director, Actor, Year) VALUES ?';
    let values =[];

    function NA(obj) {
      for (const i of Object.keys(obj)) {
        if (obj[i] === 'NA') {
          obj[i] = 0;
        }
      }
      console.log(obj);
      return obj;
    }


    for (const i in moviesjson) {
      values[i]=[];
       if (Object.values(i).includes('NA')) {
        i = NA(i);
        values[i].push(moviesjson[i]['Rank'],
                    moviesjson[i]['Title'],
                    moviesjson[i]['Description'],
                    moviesjson[i]['Runtime'],
                    moviesjson[i]['Genre'],
                    moviesjson[i]['Rating'],
                    moviesjson[i]['Metascore'],
                    moviesjson[i]['Votes'],
                    moviesjson[i]['Gross_Earning_in_Mil'],
                    moviesjson[i]['Director'],
                    moviesjson[i]['Actor'],
                    moviesjson[i]['Year']
                    )
        }else{
          values[i].push(moviesjson[i]['Rank'],
                    moviesjson[i]['Title'],
                    moviesjson[i]['Description'],
                    moviesjson[i]['Runtime'],
                    moviesjson[i]['Genre'],
                    moviesjson[i]['Rating'],
                    moviesjson[i]['Metascore'],
                    moviesjson[i]['Votes'],
                    moviesjson[i]['Gross_Earning_in_Mil'],
                    moviesjson[i]['Director'],
                    moviesjson[i]['Actor'],
                    moviesjson[i]['Year']
                    )
        }
      }
            con.query(sql, [values],(err, result) =>{
                if (err) throw err;
                console.log("Number of records inserted: " + result.affectedRows);
              });
      });