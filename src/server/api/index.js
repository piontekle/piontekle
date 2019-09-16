module.exports = {
  init(app) {
    const contactRoutes = require('./contact-routes.js');
    const adminRoutes = require('./admin-routes.js');
    const postRoutes = require('./post-routes.js')

    app.use(contactRoutes);
    app.use(adminRoutes);
    app.use(postRoutes);
  }
}
