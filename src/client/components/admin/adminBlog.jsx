import React, { Component } from 'react';
import axios from 'axios';

import getURL from '../functions/getURL';

class AdminBlog extends Component {
  constructor() {
    super();

    this.state = {
      url: null
    }
  }

  componentDidMount() {
    this.setState({ url: getURL() });
  }

  signOut(e) {
    e.preventDefault();
    const { url } = this.state;

    axios.post(`${url}/api/admin-out`)
    .then(res => {
      console.log(res.data.msg);
      window.location = "/";
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <section className="card">
      <div>Woo Admin Blog</div>
      <button onClick={this.signOut.bind(this)}>Sign Out</button>
      </section>
    )
  }
}

export default AdminBlog;
