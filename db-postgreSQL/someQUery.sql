--SELECT * from books
--SELECT author, count(*), avg(page_count) from books group by author
--SELECT publisher, count( * ) from books group by publisher
--SELECT publisher, count( * ) from books group by publisher HAVING count(*) >= 2
--SELECT author, avg(page_count) from books group by author having avg(page_count) > 500
--SELECT id, author from books order by author
--SELECT id, author, price from books order by price DESC
--SELECT author, title from books order by author, title
--SELECT author, title from books order by author, title limit 5
--SELECT * from books OFFSET 35 -- basacly start from the offset
--Select id, title from books where id in (1, 7, 9)
--Select id, title from books where id not in (1, 7, 9)
--Select id, title from books where id BETWEEN 20 and 25
--Select id, title, price from books where id not BETWEEN 10 and 20 and price > 20
--Select id, title, author from books where title Ilike '%harry%'
--select author from books where author ilike '%g'
--SELECT author from books where author ilike '% % %'
--SELECT avg(page_count) as avg_pages, avg(price) as avg_price from books GROUP by author
--SELECT author, sum(page_count) as total from books group by author order by total de

--INSERT  into books (title, author, price) VALUES ('dogs book', 'Roger Delgado', 9.99)
--SELECT * from books where author = 'Roger Delgado'
--INSERT  into books (title, author, price) VALUES 
--  ('chicken book', 'Roger Delgado', 9.99),
--  ('Animal are cool', 'Me Delgado', 19.99),
--  ('Food from Heaven', 'Mam Cuba', 100.99)

--SELECT * from books order by id DESC

--UPDATE books set price = 0 WHERE author = 'Roger Delgado'
--UPDATE books set price = 100.99 WHERE author = 'Roger Delgado'
--INSERT  into books (title, author, price) VALUES ('dogs book', 'Roger Delgado', 9.99)
--UPDATE books set page_count = 450, price = 100 WHERE author = 'Roger Delgado';
--DELETE from books where title = 'dogs book';
--SELECT * from books where author = 'Roger Delgado'
--select continent, count(name) from world group by continent
--select sum(population) from world where name in ('Estonia', 'Latvia', 'Lithuania')

























