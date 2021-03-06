const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  setPassword(password) {
    const salt = bcrypt.genSaltSync();

    return bcrypt.hashSync(password, salt);
  },
  validatePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  },
  ensureAuth(req, res, next) {
    const token =
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;

    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
      jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.email = decoded.email;
          next();
        }
      });
    }
  }
}
