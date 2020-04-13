# Punchcode-Movies-SQL

### 1. Select all columns and rows from the movies table
SELECT * FROM Movies.Movies;

### 2. Select only the title and id of the first 10 rows
SELECT m.id, m.title FROM Movies.Movies m
LIMIT 10
### 3. Find the movie with the id of 485
SELECT m.title
FROM Movies.Movies m
WHERE id = 485;

### 4. Find the id (only that column) of the movie Made in America (1993)
SELECT m.id
FROM Movies.Movies m
WHERE title = "Made in America (1993)"

### 5. Find the first 10 sorted alphabetically
SELECT m.title
FROM Movies.Movies m
ORDER BY m.title
LIMIT 10

### 6. Find all movies from 2002
SELECT m.title
FROM Movies.Movies m
WHERE m.title LIKE '%2002%';

### 7. Find out what year the Godfather came out
SELECT m.title
FROM Movies.Movies m
WHERE m.title LIKE '%Godfather, The%';

### 8. Without using joins find all the comedies
SELECT *
FROM Movies.Movies m
WHERE m.genres = "Comedy"

### 9. Find all comedies in the year 2000
SELECT *
FROM Movies.Movies m
WHERE m.genres = "Comedy" AND m.title LIKE "%2000%"

### 10. Find any movies that are about death and are a comedy
SELECT *
FROM Movies.Movies m
WHERE m.title LIKE '%death%' AND m.genres = 'Comedy'

### 11. Find any movies from either 2001 or 2002 with a title containing super
SELECT *
FROM Movies.Movies m
WHERE (m.title LIKE '%(2001)%'
OR m.title LIKE '%(2002)%')
AND m.title LIKE '%super%'

### 12. Create a new table called actors (We are going to pretend the actor can only play in one movie). The table should include name, character name, foreign key to movies and date of birth at least plus an id field.
CREATE TABLE `Movies`.`Actors` (
  `idActors` INT NOT NULL,
  `ActorName` VARCHAR(45) NULL,
  `CharacterName` VARCHAR(45) NULL,
  `MoviesId` INT NULL,
  `ActorDOB` VARCHAR(45) NULL,
  PRIMARY KEY (`idActors`))

### 13. Pick 3 movies and create insert statements for 10 actors each. You should use the multi value insert statements
INSERT INTO Movies.Actors (ActorName, CharacterName, MoviesId)
VALUES ("actor1", "char1", 1089),
("actor2", "char2", 1089),
("actor3", "char3", 1089),
("actor4", "char4", 1089),
("actor5", "char5", 1089),
("actor6", "char6", 1089),
("actor7", "char7", 1089),
("actor8", "char8", 1089),
("actor9", "char9", 1089),
("actor10", "char10", 1089),
("actor11", "char11", 1227),
("actor12", "char12", 1227),
("actor13", "char13", 1227),
("actor14", "char14", 1227),
("actor15", "char15", 1227),
("actor16", "char16", 1227),
("actor17", "char17", 1227),
("actor18", "char18", 1227),
("actor19", "char19", 1227),
("actor20", "char20", 1227),
("actor21", "char21", 849),
("actor22", "char22", 849),
("actor23", "char23", 849),
("actor24", "char24", 849),
("actor25", "char25", 849),
("actor26", "char26", 849),
("actor27", "char27", 849),
("actor28", "char28", 849),
("actor29", "char29", 849),
("actor30", "char30", 849);


### 14. Create a new column in the movie table to hold the MPAA rating. UPDATE 5 different movies to their correct rating
ALTER TABLE `Movies`.`movies` 
ADD COLUMN `mpaa` VARCHAR(45) NULL AFTER `genres`

UPDATE Movies.movies
SET mpaa = "G"
WHERE id = 1;

UPDATE Movies.movies
SET mpaa = "PG-13"
WHERE id = 2;


UPDATE Movies.movies
SET mpaa = "PG-13"
WHERE id = 3;


UPDATE Movies.movies
SET mpaa = "R"
WHERE id = 4;

UPDATE Movies.movies
SET mpaa = "PG"
WHERE id = 5;

### 15. Create a new column in the movie table to hold the MPAA rating. UPDATE 5 different movies to their correct rating
SELECT m.title, r.rating FROM Movies.movies m
LEFT JOIN ratings r ON m.id = r.movie_id
WHERE m.title LIKE '%Godfather,%'

### 16. Order the previous objective by newest to oldest
SELECT m.title, r.rating, r.timestamp FROM Movies.movies m
LEFT JOIN ratings r ON m.id = r.movie_id
WHERE m.title LIKE '%Godfather,%'
ORDER BY r.timestamp ASC

### 17. Find the comedies from 2005 and get the title and imdbid from the links table
SELECT m.title, l.imdb_Id FROM Movies.movies m
LEFT JOIN links l ON m.id = l.movie_Id
WHERE m.title LIKE '%(2005)%'

### 18. Find all movies that have no ratings
SELECT m.title, r.rating 
FROM Movies.movies m
LEFT JOIN ratings r ON m.id = r.movie_id
WHERE ISNULL(r.rating)

### 19. Get the average rating for a movie
SELECT m.title, AVG(r.rating) AS avgrating FROM movies m
LEFT JOIN ratings r ON m.id = r.movie_id
WHERE m.title LIKE '%Godfather%'
GROUP BY m.title

### 20. Get the total movies for a genre
SELECT m.genres, COUNT(m.title) 
FROM movies m
WHERE m.genres = "Comedy"

### 21. Get the average rating for a user
SELECT r.user_id, AVG(r.rating) AS avgrating
FROM ratings r
WHERE r.user_id = 6

### 22. Find the user with the most ratings
SELECT r.user_id,  COUNT(r.rating)as RatingCount
FROM ratings r
GROUP BY r.user_id
ORDER BY RatingCount DESC

### 23. Find the user with the highest average rating
SELECT. r.user_id,  AVG(r.rating)as RatingAverage
FROM ratings r
GROUP BY r.user_id
ORDER BY RatingAverage DESC

### 24. Find the user with the highest average rating with more than 50 reviews
SELECT. 
view.user_id,
view.RatingCount,
view.RatingAvg
FROM (SELECT user_id, COUNT(rating) AS RatingCount, AVG(rating) AS RatingAvg
FROM ratings 
GROUP BY user_id) AS view
WHERE view.RatingCount > 50
ORDER BY view.RatingAvg DESC
LIMIT 1;

### 25. Find the movies with an average rating over 4 - KEEPS TIMING OUT
SELECT
view.title,
view.avgrating
FROM(SELECT m.title, AVG(r.rating) AS avgrating FROM movies m
LEFT JOIN ratings r ON m.id = r.movie_id
GROUP BY m.title) AS view
WHERE view.avgrating > 4

### 26. Use concat and research about internet movie database to produce a valid url from the imdbid
SELECT CONCAT('https://www.imdb.com/title/tt', imdb_Id) 
FROM Movies.links;


### 27. Use concat and research about the movie database to produce a valid url from tmdbid
SELECT CONCAT('https://www.themoviedb.org/movie/', tmdb_Id) 
FROM Movies.links;


### 28. Get the ratings for The Unusuals and convert the timestamp into a human readable date time
SELECT m.title, r.rating, FROM_UNIXTIME(r.timestamp, '%a - %M %D %y  %H:%i:%s') as Date
FROM Movies.movies m
LEFT JOIN ratings r ON m.id = r.movie_id
WHERE m.title LIKE '%usual%'


### 29. Using SQL normalize the tags in the tags table. Make them lowercased and replace the spaces with -
SELECT LOWER(view.NormalizedTags)
FROM (SELECT REPLACE(tag, ' ', '-') AS NormalizedTags
FROM Movies.tags) AS view


### 30. Create a new field on the movies table for the year. Using an update query and a substring method update that column for every movie with the year found in the title column.
UPDATE movies
SET 
	year = SUBSTRING(title, -6)


### 31. Once you have completed the new year column go through the title column and strip out the year.
 UPDATE movies
 SET title=LEFT(title,length(title)-6)


### 32. Create a new column in the movies table and store the average review for each and every movie.
 UPDATE movies m
 LEFT JOIN ratings r ON m.id = r.movie_id
 SET m.reviewaverage = AVG(r.rating)
WHERE ISNULL(m.reviewaverage)
