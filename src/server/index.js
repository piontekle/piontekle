require("dotenv").config();
const express = require('express');
const app = express();
var path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");

const routes = require('./routes.js');
console.log(__dirname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//CORS
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

  next();
});

//serve static files from dist and get routes
app.use(express.static('dist'));
app.use('/', routes);
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', '/dist/index.html'));
});

module.exports = app;
