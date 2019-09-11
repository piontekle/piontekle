require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require("morgan");
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");

const routes = require('./api');
const passportStrategy = require('./auth/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//CORS
var whitelist = ['http://localhost:3000', 'http://www.piontekle.com', 'http://piontekle.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}

app.use(cors(corsOptions));

//Session setting and passport initialization
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: '/',
        maxAge: 1.21e+9,
        secure: false,
        httpOnly: false
      }
    }));
passportStrategy.init(app);

// serve static files from dist and get routes
app.use(express.static('dist'));
routes.init(app);
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', '/dist/index.html'));
});

module.exports = app;
