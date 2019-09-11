const express = require('express');
const app = express();
const passport = require('passport');
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
      res.json({ msg: 'admin logged in', token: token});
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  })
});

app.get('/api/checkAdmin', passport.authenticate('jwt', {session: false}), function(req, res) {
  console.log('checking admin');
  res.sendStatus(200);
});

app.post('/api/adminOut', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'admin logged out' });
})

module.exports = app;
