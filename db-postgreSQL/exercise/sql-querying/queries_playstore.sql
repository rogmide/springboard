-- Comments in SQL Start with dash-dash --

--SELECT app_name from analytics where id = 1880;
--select id, app_name from analytics where last_updated = '2018-08-01';
--SELECT category, count(app_name) as number_app from analytics group by category
--select app_name , reviews from analytics order by reviews desc limit 5
--SELECT app_name, rating from analytics where rating >= 4.8 
SELECT category, avg(rating) AS avg_rating FROM analytics GROUP BY category ORDER BY avg_rating DESC