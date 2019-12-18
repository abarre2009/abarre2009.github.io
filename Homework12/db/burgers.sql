CREATE DATABASE burgers_db;

USE burgers_db;

CREATE table burgers(id int NOT NULL auto_increment, 
burger_name varchar(100) NOT NULL, 
devoured BOOL default false, primary key(id) );

INSERT INTO burgers(burger_name, devoured) values("whopper", false);

INSERT INTO burgers(burger_name, devoured) values("ultimate burger", false);
INSERT INTO burgers(burger_name, devoured) values("big mac", false);
INSERT INTO burgers(burger_name, devoured) values("juicy lucy", false);
INSERT INTO burgers(burger_name, devoured) values("quarter pounder", false);
INSERT INTO burgers(burger_name, devoured) values("hamburger", false);

