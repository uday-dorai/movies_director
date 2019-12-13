Description:-

Build a REST API

Repo name format: movies-api-<first_name>

NodeJS module using raw SQL queries Write functions for the following: 

Directors:
Get all directors
Get the director with given ID
Add a new director
Update the director with given ID
Delete the director with given ID

Movies:
Get all movies
Get the movie with given ID
Add a new movie
Update the movie with given ID
Delete the movie with given ID
API endpoints:

Movies resource:

To manage the entire collection of movies resource URI : /api/movies

GET : to retrieve all movies 
POST : to add a new movie

Movie resource

To manage a single movie resource URI: /api/movies/:Id

GET : to retrieve a movie 
PUT : to update details of a movie 
DELETE : to remove a movie

Directors resource:

To manage the entire collection of directors resource URI : /api/directors

GET : to retrieve all directors 
POST : to add a new director

Director resource

To manage a single director resource URI: /api/directors/:Id

GET : to retrieve a director 
PUT : to update details of a director 
DELETE : to remove a director

server will run at PORT:3000