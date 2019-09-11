const passport = require('passport');
const passportJWT = require('passport-jwt');

const User = require('../db/models').User;

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

module.exports = {
  init(app){
    app.use(passport.initialize());

    passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
      console.log('passport jwt initialize');
      User.findByPk(jwt_payload.id)
      .then(user => {
        if (!user) {
          return next(null, false, { msg: 'User not found'});
        }
        return next(null, user);
      })
    }));
  }
};
