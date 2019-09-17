import React, { Component } from 'react';
import axios from 'axios';
import './blog.css'

import getURL from '../functions/getURL';

class NewBlog extends Component {
  constructor() {
    super();

    this.state = ({
      title: '',
      content: '',
      topics: [],
    })
  }

  handleChange = value => e => {
    this.setState({ [value]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, content, topics } = this.state;
    let url = getURL();

    let slug = title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');

    axios.post(`${url}/api/new-post`, {
      title,
      content,
      topics,
      slug
    })

  }

  render() {
    const { title, content, topics } = this.state;

    return (
      <section className="card blog-form-card">
        <form id="contact-form" onSubmit={(e) => this.handleSubmit(e)} method="POST">
          <h3 className="card-heading">New Blog Post</h3>
          <label className="blog-label" htmlFor="title">Title:</label>
          <input
            type="text"
            autoComplete="username"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.handleChange("title")}
          />
          <label className="blog-label" htmlFor="content">Content:</label>
          <textarea
            name="content"
            rows="10"
            value={content}
            placeholder="Post content"
            onChange={this.handleChange("content")}
          >
          </textarea>
          <label className="blog-label" htmlFor="topics">Topics:</label>
          <input
            type="text"
            autoComplete="topics"
            name="topics"
            value={topics}
            placeholder="Topics"
            onChange={this.handleChange("topics")}
          />
          <small>Comma separated</small>
          <button type="submit">Post</button>
        </form>
      </section>
    )
  }
}

export default NewBlog;
