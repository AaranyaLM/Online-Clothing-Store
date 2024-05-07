const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config({
  path: './.env'
});

const app = express();
const db = require('./database');

   //parse URL-encoded bodies 
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// const publicDir = path.join(__dirname, "./folderforcss")
//app.use(express.static(publicDir));

app.set( "view engine", "hbs" ); //
app.use(express.static(path.join(__dirname, 'public')));

//defineing  the routes
app.use( "/", require('./routes/pages'));
app.use('/auth', require('./routes/auth'))

// Define a route to render the HTML file with the image
app.get('/', (req, res) => {
  console.log('Request received for homepage');
  res.render('index', { imageUrl: '/images/photo.jpg' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});



