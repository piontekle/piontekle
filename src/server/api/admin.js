const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const authHelper = require('../auth/helpers');
const User = require('../db/models').User;

app.post('/api/adminIn', (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({where: {username: username} })
  .then(user => {
    if (authHelper.validatePassword(password, user.password)) {
      let payload = { id: user.id };
      let token = jwt.sign(payload, process.env.JWT_SECRET);

      res.cookie('token', token, { httpOnly: true }).json({ msg: 'admin logged in'});
    } else {
      res.status(401).json({ msg: 'Password is incorrect' })
    }
  })
});

app.get('/api/checkAdmin', authHelper.ensureAuth, function(req, res) {
  console.log("ENSURE AUTH SUCCESS")
  res.sendStatus(200);
});

app.post('/api/adminOut', (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({ msg: 'admin logged out' });
})

module.exports = app;
