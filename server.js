//EXTERNAL MODULES
const express = require('express');
const morgan = require('morgan');

//.define port
const port = 3000;

//CONNECT TO DB
require('./config/database');

// const indexRouter = require('./routes/index');
// const subRouter = require('./routes/subforum.js');
// const postRouter = require('./routes/posting')


const app = express();


app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// app.use('/', indexRouter);


// Home landing page (for testing) http://localhost:3000
app.get( '/', ( req, res ) => {
  res.send('<h1>SEIdit!</h1><a href="/seidit/" >Log in to SEIdit</a>');
  });

app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
