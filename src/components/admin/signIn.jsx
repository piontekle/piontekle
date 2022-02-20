import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import getURL from '../../utilities/getURL';


class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      url: null,
      redirect: false,
      username: '',
      password: ''
    }

    axios.defaults.withCredentials = true;
  }

  async componentDidMount() {
    let url = getURL();

    await axios.get(`${url}/api/check-admin`)
    .then(res => {
      if (res.status === 200) {
        this.setState({
          url: url,
          redirect: true
        });
      }
    })
    .catch(err => {
      this.setState({
        url: url,
        redirect: false
      });
    })
  }

  handleChange = value => e => {
    this.setState({ [value]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { url, username, password } = this.state;

    axios.post(`${url}/api/admin-in`, {
      username,
      password
    })
    .then(res => {
      if (res.data.msg === 'admin logged in') {
        this.setState({ redirect: true });
      } else {
        alert(`Login Error: ${res.data.msg}`);
      }
    })
    .catch(err => {
      alert(err.response.data);
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
          <label htmlFor="password">Password:</label>
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
