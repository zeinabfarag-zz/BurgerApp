//dependenices
const express = require('express');
const exphbars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverRide = require('method-override');
//setting up server
var app = express();
//port to listen on
var PORT = process.env.PORT || 3000;
//static content for application from public directory
app.use(express.static(path.join(__dirname, 'public')));
//to override http method to allow methods like PUT or delete(not in this app though) where client does not support it
app.use(methodOverRide('_method'));
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Set up Handlebars
app.engine('handlebars', exphbars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var routes = require('./controllers/burger_controller');
app.use('/', routes);
//listening fn
app.listen(PORT, function() {
  console.log(`Listening on PORT: ${PORT}`);
});
