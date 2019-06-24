
CREATE DATABASE cowlist;

USE cowlist;

CREATE TABLE cows(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  description VARCHAR(255),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

