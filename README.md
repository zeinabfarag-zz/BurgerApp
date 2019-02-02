# BurgerApp

## Overview

A burger logger application made with Node.js, Express, MySQL, and Handlebars.

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as *Burgers you can eat* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

## Installation

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/zeinabfarag/BurgerApp.git 
	
Next, install the application dependencies.

	cd BurgerApp
	npm install
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

## Technologies Used
* Node.js
* MySQL
* jQuery
* Bootstrap

## Website

https://github.com/zeinabfarag/BurgerApp
