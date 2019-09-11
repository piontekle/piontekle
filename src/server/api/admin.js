const express = require('express');
const app = express();
const passport = require('passport');

const authHelper = require('../auth/helpers');

app.post('/api/adminIn', (req, res, next) => {
  passport.authenticate('local')(req, res, function() {
    if (!req.user) {
      res.status(401).json({ msg: 'login failed, user not set'});
    } else {
      res.status(200).json({ msg: 'admin logged in' });
    }
  })
});

app.get('/api/checkAdmin', authHelper.ensureAuth, function(req, res) {
  console.log('checking admin');
  res.sendStatus(200);
});

app.post('/api/adminOut', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'admin logged out' });
})

module.exports = app;
