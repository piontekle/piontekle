require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require("morgan");
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");

const routes = require('./api');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//CORS config to allow React to send cookie
var whitelist = ['http://localhost:3000', 'http://piontekle.com', 'https://piontekle.com', 'http://piontekle.herokuapp.com', 'https://piontekle.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  allowedHeaders: "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control",
  cacheControl: "no-store,no-cache,must-revalidate",
  credentials: true
}

app.use(cors());

// app.use(function(req, res, next) {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//       res.setHeader("Access-Control-Allow-Credentials", "true");
//       res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//
//       next();
//     })

app.use(cookieParser());

// serve static files from dist and get routes
app.use(express.static('dist'));
routes.init(app);
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', '/dist/index.html'));
});

module.exports = app;
