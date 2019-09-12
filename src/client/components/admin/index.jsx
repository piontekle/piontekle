import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from './auth';

import AdminBlog from './adminBlog';

const Admin = () => (
  <AuthUserContext.Consumer>
  {
    admin =>
    admin ? <AdminBlog /> : <div>No dice <Link className="link" to="/sign-in">Sign-in</Link></div>
  }
  </AuthUserContext.Consumer>
)


export default Admin;
