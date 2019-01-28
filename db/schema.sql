-- Create Database
CREATE DATABASE burger_db;

-- Use Database
USE burger_db;

-- Create Table
CREATE TABLE burgers (
  id int AUTO_INCREMENT not null,
  burger_name VARCHAR(30) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY(id)
);

