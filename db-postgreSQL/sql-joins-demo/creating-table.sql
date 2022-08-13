DROP TABLE IF EXISTS substuff;
CREATE TABLE substuff (
id SERIAL PRIMARY KEY,
-- setting up a foreign key
id_user INTEGER NOT NULL REFERENCES users,
NAME VARCHAR(15) NOT NULL,
-- Setting up a default value to the field on the table 
amount INTEGER CHECK (amount > 0) DEFAULT 245,
somebank TEXT
);


INSERT INTO substuff (NAME, id_user)
VALUES ('my name', 1),
('another', 2);

SELECT * FROM substuff