-- write your queries here

SELECT * 
FROM owners o
LEFT JOIN vehicles v
ON v.owner_id = o.id;

SELECT o.first_name, o.last_name, count( * ) 
FROM owners o
JOIN vehicles v
ON o.id = v.owner_id
GROUP BY o.first_name, o.last_name
ORDER BY o.first_name;


SELECT o.first_name, o.last_name, ROUND(AVG(v.price)) AS avg_price , count( v.owner_id ) AS total
FROM owners o
JOIN vehicles v
ON o.id = v.owner_id
GROUP BY (o.first_name, o.last_name)
HAVING ROUND(AVG(v.price)) > 10000
ORDER BY total DESC;
