import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
      subject: "Saw your portfolio - let's get in touch!",
      message: "",
    }
  }

  handleChange = value => e => {
    this.setState({ [value]: e.target.value })
  }

  messageFeedback = () => {
    alert("Message sent. I'll be in touch soon!")
    window.location("/")
  }


  render() {
    const { name, email, subject, message } = this.state;

    return (
      <section className="card form-card">
        <form
          name="contact-form"
          id="contact-form"
          action={this.messageFeedback}
          method="POST"
          netlify-data={true}
        >
        <input type="hidden" name="form-name" value="contact-form" />
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
