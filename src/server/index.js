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
var whitelist = ['http://localhost:3000', 'http://www.piontekle.com', 'https://www.piontekle.com', 'http://piontekle.herokuapp.com', 'https://piontekle.herokuapp.com']
var corsOptions = {
  origin: true
  // function (origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  //}
  ,
  allowedHeaders: "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control",
  cacheControl: "no-cache, no-store, must-revalidate",
  credentials: true
}

app.use(cors(corsOptions));

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
const dir = 'dist'
app.use(express.static(dir));
app.use(express.static(path.join(__dirname, '..', '..', dir)));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', `/${dir}/index.html`));
});
routes.init(app);

module.exports = app;
