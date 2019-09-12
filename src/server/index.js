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
  origin: true,
  allowedHeaders: "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Pragma, ETag",
  credentials: true
}
app.use(cors(corsOptions));

app.use(cookieParser());

// get routes and serve static files
const dir = 'dist'
routes.init(app);
app.use(express.static(dir));
app.use(express.static(path.join(__dirname, '..', '..', dir)));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', `/${dir}/index.html`));
});

module.exports = app;
