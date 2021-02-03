//EXTERNAL MODULES
const express = require('express');
const morgan = require('morgan');

//.define port
const port = 3000;

//CONNECT TO DB
require('./config/database');

//INTERNAL MODULES



const app = express();

//Set view engine to EJS
app.set('view engine', 'ejs');
//initialize morgan
app.use(morgan('dev'));
//initialize json for POST requests
app.use(express.json());
//initialize urlencoded for POST requests
app.use(express.urlencoded({ extended: false }));
//used to serve static files (images/css/js) from PUBLIC directory
app.use(express.static('public'));

// app.use('/', indexRouter);



// Home landing page (for testing) http://localhost:3000
app.get( '/', ( req, res ) => {
  res.send('<h1>SEIdit!</h1><a href="/seidit/" >Log in to SEIdit</a>');
  });

app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
