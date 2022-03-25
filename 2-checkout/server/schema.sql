DROP DATABASE checkout;
CREATE DATABASE checkout;
USE checkout;

CREATE TABLE info (
  session_id VARCHAR(50) NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(30) NOT NULL,
  address1 VARCHAR(30) NOT NULL,
  address2 VARCHAR(20),
  city VARCHAR(90) NOT NULL,
  state VARCHAR(20) NOT NULL,
  zip VARCHAR(10) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  card_num VARCHAR(20) NOT NULL,
  card_expiry VARCHAR(10) NOT NULL,
  cvv VARCHAR(5) NOT NULL,
  bill_zip VARCHAR(10) NOT NULL
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

