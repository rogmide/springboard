-- Comments in SQL Start with dash-dash --

SELECT app_name FROM analytics WHERE id = 1880;
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';
SELECT category, count(app_name) AS number_app FROM analytics GROUP BY category;
SELECT app_name , reviews FROM analytics ORDER BY reviews DESC LIMIT 5;
SELECT app_name, rating FROM analytics WHERE rating >= 4.8 ;
SELECT category, avg(rating) AS avg_rating FROM analytics GROUP BY category ORDER BY avg_rating DESC;
SELECT app_name, rating, price FROM analytics WHERE rating <= 3 ORDER BY price DESC;
SELECT app_name, min_installs,rating FROM analytics WHERE min_installs <= 50 AND rating IS NOT NULL ORDER BY rating DESC;
SELECT app_name, rating FROM analytics WHERE rating >= 3 AND reviews >= 10000;
SELECT app_name, price, reviews FROM analytics WHERE price BETWEEN 0.10 AND 1 ORDER BY reviews DESC LIMIT 10;
SELECT app_name, last_updated FROM analytics ORDER BY last_updated;
SELECT app_name, price FROM analytics ORDER BY price DESC;
SELECT app_name, MAX(price) AS price_c FROM analytics GROUP BY app_name ORDER BY price_c DESC;
SELECT sum(reviews) AS c_review FROM analytics WHERE app_name LIKE 'Google%';
SELECT category, count( app_name ) FROM analytics GROUP BY category HAVING count( app_name ) > 300 ORDER BY count( app_name );
SELECT app_name, reviews, min_installs, (min_installs - reviews) AS proportion FROM analytics WHERE min_installs >= 100000 ORDER BY proportion DESC;
