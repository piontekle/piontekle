import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from './auth';

import BlogIndex from '../blog';

const Admin = () => (
  <AuthUserContext.Consumer>
  {
    admin =>
    admin ? <BlogIndex admin={admin} /> : <div>No dice <Link className="link" to="/sign-in">Sign-in</Link></div>
  }
  </AuthUserContext.Consumer>
)


export default Admin;
