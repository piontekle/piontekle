import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      url: null,
      redirect: false,
      username: '',
      password: ''
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

  handleChange = value => e => {
    this.setState({ [value]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { url, username, password } = this.state;

    axios.post(`${url}/api/adminIn`, {
      username,
      password
    })
    .then(res => {
      if (res.data.msg === 'admin logged in') {
        console.log('yay admin login')
        this.setState({ redirect: true });
      } else {
        alert(`Login Error: ${res.data.msg}`);
      }
    })
    .catch(err => {
      alert(err.response);
    })
  }

  render() {
    const { redirect, username, password } = this.state;

    if (redirect) return <Redirect to="/admin" />

    return (
      <section className="card form-card">
        <form id="contact-form" onSubmit={(e) => this.handleSubmit(e)} method="POST">
          <h3 className="card-heading">Admin Sign In</h3>
          <label htmlFor="name">username:</label>
          <input
            type="text"
            autoComplete="username"
            name="name"
            value={username}
            placeholder="username"
            onChange={this.handleChange("username")}
          />
          <label htmlFor="subject">Password:</label>
          <input
            type="password"
            autoComplete="current-password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleChange("password")}
          />
          <button type="submit">Login</button>
        </form>
      </section>
    )
  }
}

export default SignIn;
