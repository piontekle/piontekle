import React, { Component } from 'react';
import axios from 'axios';

class AdminBlog extends Component {
  constructor() {
    super();

    this.state = {
      url: null
    }

    this.getURL = this.getURL.bind(this);
  }

  componentDidMount() {
    this.getURL();
  }

  getURL() {
    let host = window.location.hostname;
    let protocol = window.location.protocol;
    let url = null;

    if (host === "localhost") {
      url = protocol + "//" + host + ":8080"
    } else {
      url = protocol + "//" + "piontekle.herokuapp.com"
    }

    this.setState({ url: url });
  }

  signOut(e) {
    e.preventDefault();
    const { url } = this.state;

    axios.post(`${url}/api/adminOut`)
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
