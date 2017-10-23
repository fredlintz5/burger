CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
	bun BOOLEAN default 0,
	beef_patty BOOLEAN default 0,
	lettuce BOOLEAN default 0,
	tomato BOOLEAN default 0,
	onion BOOLEAN default 0,
	cheese BOOLEAN default 0,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);