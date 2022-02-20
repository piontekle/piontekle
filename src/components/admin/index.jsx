import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from './auth';

import BlogIndex from '../blog';

const Admin = () => (
  <AuthUserContext.Consumer>
  {
    admin => <BlogIndex admin={admin} /> 
  }
  </AuthUserContext.Consumer>
)


export default Admin;
