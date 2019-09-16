const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const authHelper = require('../auth/helpers');
const User = require('../db/models').User;

app.post('/api/admin-in', (req, res, next) => {
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

app.get('/api/check-admin', authHelper.ensureAuth, function(req, res) {
  res.sendStatus(200);
});

app.post('/api/admin-out', (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({ msg: 'admin logged out' });
})

module.exports = app;
