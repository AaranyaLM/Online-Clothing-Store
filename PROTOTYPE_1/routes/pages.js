const express = require("express");
const router = express.Router();
const path = require("path");

const app = express();
app.use(express.static('public')); // 'public' is the directory name where images are stored
app.set( "view engine", "hbs" ); //
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

// Define a route to render the HTML file with the image
app.get('/', (req, res) => {
    console.log('Request received for homepage');
    res.render('index', { imageUrl: '/images/photo.jpg' });
  });
  
  
router.get("/", (req, res) => {
    res.render("main");
});


module.exports = router;
