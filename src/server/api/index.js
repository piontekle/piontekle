module.exports = {
  init(app) {
    const contactRoutes = require('./contact.js');
    const adminRoutes = require('./admin.js');

    app.use(contactRoutes);
    app.use(adminRoutes);
  }
}
