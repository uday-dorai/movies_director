const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyparser = require('body-parser');
app.use(bodyparser.json());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'uday243#',
  database: 'movies_director'
});



app.get('/api', function (req, res) {
  res.send('List Movies-Directors!');
});

// get all director list

app.get('/api/directors', (req, res) => {
  con.query(`SELECT * FROM dir_table`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// get director by id:?
app.get('/api/directors/:id', (req, res) => {

  con.query(`SELECT * FROM dir_table where movie_rank= ${req.params.id}`, (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      res.status(404).send(`request not found`);
    }
    res.send(result);
  });
});

// add new director using post
app.post('/api/directors', (req, res) => {
  console.log(req.body);
  let que = `insert into dir_table(Director) value ('${req.body.director}') `;
  con.query(que, (err, result) => {
    if (err) throw err;
    res.status(201).send(`Director is added successfully`);
  });
});

// update the director of an given id:
app.put('/api/directors/:id', (req, res) => {
  console.log(req.body);
  let que = `update dir_table set director ='${req.body.director}' where movie_Rank = '${req.params.id}' `;
  con.query(que, (err, result) => {
    if (err) throw err;
    if (result === 0) {
      res.Status(404).send('id: not found');
    }
    res.status(202).send(`Director is updated successfully at ${req.params.id}`);
  });
});

// delete the director of id:?
app.delete('/api/directors/:id', (req, res) => {
  con.query(`delete from dir_table where movie_rank= ${req.params.id}`, (err, result) => {
    if (err) throw err;
    if (result['affectedRows'] != 0) {
      res.status(410).send(`Director with id:${req.params.id} has been deleted`);
    } else {
      res.status(404).send(`request not found`);
    }
  });
});


// get all data in movies table

app.get('/api/movies', (req, res) => {
  con.query(`SELECT * FROM movies_dir`, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});


// get movies by id:?

app.get('/api/movies/:id', (req, res) => {

  con.query(`SELECT * FROM movies_dir where movie_rank= ${req.params.id}`, (err, result) => {
    if (err) throw err;
    if (result.length != 0) {
      res.send(result);
    } else {
      res.status(404).send(`request not found`);
    }
  });
});

// add movies using post
app.post('/api/movies', (req, res) => {
  //console.log(req.body);
  let values = [];
  values.push([
    req.body.rank,
    req.body.title,
    req.body.description,
    req.body.runtime,
    req.body.genre,
    req.body.rating,
    req.body.metascore,
    req.body.votes,
    req.body.gross_earning,
    req.body.director,
    req.body.actor,
    req.body.year
  ]);
  let que = `insert into movies_dir(movie_Rank, movie_Title, movie_Descript, movie_Runtime, Genre, Rating, Metascore ,Votes ,Gross_Earning_in_Mil, Director,Actor,Year) values ? `;
  con.query(que, [values], (err, result) => {
    if (err) throw err;
    res.status(201).send(`Movie added successfully`);
  });
});

// updating the data of a given movie id:
app.put('/api/movies/:id', (req, res) => {
  console.log("hello");
  const body = req.body;
  const movie = {
    title: body.title,
    description: body.description,
    runtime: body.runtime,
    genre: body.genre,
    rating: body.rating,
    metascore: body.metascore,
    votes: body.votes,
    gross_earning: body.gross_earning,
    director: body.director,
    actor: body.actor,
    year: body.year
  }
  console.log(movie);
  let que = `update movies_dir set movie_Title ='${movie.title}',movie_Descript = '${movie.description}',movie_Runtime = ${movie.runtime},Genre = '${movie.genre}',Rating = ${movie.rating},Metascore = ${movie.metascore},Votes = ${movie.votes},Gross_Earning_in_Mil = ${movie.gross_earning},Director = '${movie.director}',Actor = '${movie.actor}',Year = ${movie.year} where movie_Rank = ${req.params.id} `;
  con.query(que, (err, result) => {
    if (err) throw err;
    res.status(202).send(`Movie updated successfully at id:${req.params.id}`);
  });
});

// delete director
app.delete('/api/movies/:id', (req, res) => {
  con.query(`delete from movies_dir where movie_rank= ${req.params.id}`, (err, result) => {
    if (err) throw err;
    //res.send(result);
    if (result['affectedRows'] != 0) {
      res.status(410).send(`movie with id:${req.params.id} has been deleted`);
    } else {
      res.status(404).send(`request not found`);
    }

  });
});


// get all data in movies table
app.get('/api/movies', (req, res) => {
  con.query(`SELECT * FROM movies_dir`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});



// get movies by id
app.get('/api/movies/:id', (req, res) => {

  con.query(`SELECT * FROM movies_dir where movie_rank= ${req.params.id}`, (err, result) => {
    if (err) throw err;
    if (result.length != 0) {
      res.send(result);
    } else {
      res.status(404).send(`request not found`);
    }
  });
});

// add movies using post
app.post('/api/movies', (req, res) => {
  //console.log(req.body);
  let values = [];
  values.push([
    req.body.rank,
    req.body.title,
    req.body.description,
    req.body.runtime,
    req.body.genre,
    req.body.rating,
    req.body.metascore,
    req.body.votes,
    req.body.gross_earning,
    req.body.director,
    req.body.actor,
    req.body.year
  ]);
  let que = `insert into movies_dir(movie_Rank, movie_Title, movie_Descript, movie_Runtime, Genre, Rating, Metascore ,Votes ,Gross_Earning_in_Mil, Director,Actor,Year) values ? `;
  con.query(que, [values], (err, result) => {
    if (err) throw err;
    res.status(201).send(`Movie added successfully`);
  });
});

// updating the data of a given movie id:
app.put('/api/movies/:id', (req, res) => {
  console.log("hello");
  const body = req.body;
  const movie = {
    title: body.title,
    description: body.description,
    runtime: body.runtime,
    genre: body.genre,
    rating: body.rating,
    metascore: body.metascore,
    votes: body.votes,
    gross_earning: body.gross_earning,
    director: body.director,
    actor: body.actor,
    year: body.year
  }
  console.log(movie);
  let que = `update movies_dir set movie_Title ='${movie.title}',movie_Descript = '${movie.description}',movie_Runtime = ${movie.runtime},Genre = '${movie.genre}',Rating = ${movie.rating},Metascore = ${movie.metascore},Votes = ${movie.votes},Gross_Earning_in_Mil = ${movie.gross_earning},Director = '${movie.director}',Actor = '${movie.actor}',Year = ${movie.year} where movie_Rank = ${req.params.id} `;
  con.query(que, (err, result) => {
    if (err) throw err;
    res.status(202).send(`Movie updated successfully at id:${req.params.id}`);
  });
});

// delete movie
app.delete('/api/movies/:id', (req, res) => {
  con.query(`delete from movies_dir where movie_rank= ${req.params.id}`, (err, result) => {
    if (err) throw err;
    //res.send(result);
    if (result == 0) {
      res.status(404).send(`request not found`);
    }
    res.status(410).send(`movie with id:${req.params.id} has been deleted`);
  });
});




const server = app.listen(3000, function () {
  console.log("listening to port 3000....");
});