import React, { Component } from 'react';
import axios from 'axios';

import getURL from '../functions/getURL';

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      url: null,
      name: "",
      email: "",
      subject: "Saw your portfolio - let's get in touch!",
      message: ""
    }
  }

  componentDidMount() {
    this.setState({ url: getURL() });
  }

  handleChange = value => e => {
    this.setState({ [value]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { url, name, email, subject, message } = this.state;

    axios.post(`${url}/sendMail`, {
      name,
      email,
      subject,
      message
    })
    .then((res) => {
      if(res.data.msg === "success") {
        alert("Message sent! I'll get back to you soon.");
        window.location = "/";
      } else if (res.data.msg === 'fail') {
        alert("Message failed to send.");
      }
    })

  }

  render() {
    const { name, email, subject, message } = this.state;

    return (
      <section className="card form-card">
        <form id="contact-form" onSubmit={(e) => this.handleSubmit(e)} method="POST">
          <h3 className="card-heading">Email Me</h3>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={this.handleChange("name")}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={this.handleChange("email")}
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={this.handleChange("subject")}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message}
            placeholder="What's your message?"
            onChange={this.handleChange("message")}
          >
          </textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    )
  }
}

export default Contact;
