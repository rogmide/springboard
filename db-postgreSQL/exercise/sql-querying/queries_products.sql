-- Comments in SQL Start with dash-dash --


INSERT INTO products (NAME,price,can_be_returned) VALUES ('chair',25.99, FALSE);
INSERT INTO products (NAME,price,can_be_returned) VALUES ('stool',25.99, TRUE);
INSERT INTO products (NAME,price,can_be_returned) VALUES ('table',124.00, TRUE);

SELECT * FROM products;
SELECT NAME FROM products;
SELECT NAME, price FROM products;


INSERT INTO products (NAME,price,can_be_returned) VALUES ('PlayStation',399.50, TRUE);
SELECT * FROM products WHERE can_be_returned;
SELECT * FROM products WHERE price <= 44.00;
SELECT * FROM products WHERE price BETWEEN 22.50 AND 99.99;

UPDATE products SET price = (price - 20) WHERE price >= 20;
DELETE FROM products WHERE price <= 25;
UPDATE products SET price = (price + 20);
UPDATE products SET can_be_returned = TRUE;

SELECT * FROM products