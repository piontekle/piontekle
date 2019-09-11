const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const authHelper = require('./helpers');

const User = require('../db/models').User;

module.exports = {
  init(app){
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy({ usernameField: "username"}, (username, password, done) => {
      User.findOne({ where: { username: username }})
      .then(user => {
        if (!user) {
          return done(null, false, { msg: 'User not found'});
        } else if (!authHelper.validatePassword(password, user.password)) {
          return done(null, false, { msg: 'Invalid password'});
        }
        return done(null, user);
      })
    }));

    passport.serializeUser((user, callback) => {
      callback(null, user.id);
    });

    passport.deserializeUser((id, callback) => {
      User.findByPk(id)
      .then((user) => {
        callback(null, user);
      })
      .catch((err => {
        callback(err, user);
      }))
    });

  }
}
