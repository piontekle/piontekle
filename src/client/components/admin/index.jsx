import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from './auth';

import AdminBlog from './adminBlog';
import SignIn from './signIn';

const Admin = () => (
  <AuthUserContext.Consumer>
  {
    admin =>
    admin ? <AdminBlog /> : null
  }
  </AuthUserContext.Consumer>
)


export default Admin;
