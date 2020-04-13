-- 1 Select all columns and rows from the movies table
SELECT * FROM Movies.Movies;

-- 2 Select only the title and id of the first 10 rows
SELECT m.id, m.title FROM Movies.Movies m
LIMIT 10
-- 3 Find the movie with the id of 485
SELECT m.title
FROM Movies.Movies m
WHERE id = 485;

-- 4 Find the id (only that column) of the movie Made in America (1993)
SELECT m.id
FROM Movies.Movies m
WHERE title = "Made in America (1993)"

-- 5 Find the first 10 sorted alphabetically
SELECT m.title
FROM Movies.Movies m
ORDER BY m.title
LIMIT 10

-- 6 Find all movies from 2002
SELECT m.title
FROM Movies.Movies m
WHERE m.title LIKE '%2002%';

-- 7 Find out what year the Godfather came out
SELECT m.title
FROM Movies.Movies m
WHERE m.title LIKE '%Godfather, The%';

-- 8 Without using joins find all the comedies
SELECT *
FROM Movies.Movies m
WHERE m.genres = "Comedy"

-- 9 Find all comedies in the year 2000
SELECT *
FROM Movies.Movies m
WHERE m.genres = "Comedy" AND m.title LIKE "%2000%"

-- 10 Find any movies that are about death and are a comedy
SELECT *
FROM Movies.Movies m
WHERE m.title LIKE '%death%' AND m.genres = 'Comedy'

