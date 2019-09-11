const bcrypt = require('bcrypt');

module.exports = {
  setPassword(password) {
    const salt = bcrypt.genSaltSync();

    return bcrypt.hashSync(password, salt);
  },
  validatePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  },
  ensureAuth(req, res, next) {
    if (!req.user){
      return res.sendStatus(401);
    } else {
      next();
    }
  }
}
