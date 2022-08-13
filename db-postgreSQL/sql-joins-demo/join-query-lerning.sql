-- insert into studios (name, founded_in) VALUES ('Orion Pictures', '1980-10-10')
-- insert into movies (title, release_year, runtime, rating, studio_id) 
-- VALUES ('Amadeus',1984, 180, 'R', 4)
-- DELETE from studios where id = 4
-- SELECT * from movies INNER join studios on public.movies.studio_id = studio_id
-- insert into movies (title, release_year, runtime, rating) 
-- VALUES ('My Sec Indie Movie',2020, 110, 'R')
-- insert into studios (name, founded_in) VALUES ('Cat Car Cat Pictures', '1980-12-12')
-- SELECT * from studios
-- SELECT * from studios RIGHT join movies on movies.studio_id = studio_id;
-- SELECT * from studios left join movies on movies.studio_id = studio_id;
-- SELECT * from studios full join movies on movies.studio_id = studio_id
-- SELECT name, count(*) as total from movies join studios on movies.studio_id = studios.id group by studios.name ORDER by total desc

-- SELECT first_name, last_name, count( * ) as total_roles from roles join actors on roles.actor_id  = actors.id group by actors.id ORDER by total_roles desc

-- insert into roles (actor_id, movie_id) values (3, 4), (3,5)
-- SELECT * from roles

-- SELECT actors.first_name, actors.last_name, movies.title from roles join actors on actors.id = roles.actor_id join movies on movies.id = roles.movie_id 

-- Using table with Alias
-- SELECT a.first_name, a.last_name, m.title from roles r join actors a on a.id = r.actor_id join movies m on m.id = r.movie_id 

-- SELECT a.first_name, a.last_name, m.title, m.release_year 
-- from roles r 
-- join actors a 
-- on a.id = r.actor_id 
-- join movies m 
-- on m.id = r.movie_id
-- where m.release_year > 2000
-- order by m.release_year, a.first_name;

SELECT * 
FROM roles r
FULL JOIN movies m
ON r.movie_id = m.id
FULL JOIN actors a
ON a.id = r.actor_id




