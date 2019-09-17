import React, { Component } from 'react';
import axios from 'axios';

import getURL from '../functions/getURL';

class EditBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      post: null,
      title: '',
      content: '',
      topics: []
    }
  }

  componentDidMount() {
    let url = getURL();

    axios.get(`${url}/api/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        url: url,
        post: res.data.post
      })
    })
    .catch(err => {
      alert(err);
    })
  }

  handleChange = value => e => {
    this.setState({ [value]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { post, title, content, topics } = this.state;
    let url = getURL();

    let slug = title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    let topicsArray = topics.split(', ');

    axios.post(`${url}/api/${post.id}/update`, {
      title,
      content,
      topicsArray,
      slug
    })
  }

  render() {
    const { post, title, content, topics } = this.state;

    return (
      <section className="card blog-form-card">
        <form id="contact-form" onSubmit={(e) => this.handleSubmit(e)} method="POST">
          <h3 className="card-heading">New Blog Post</h3>
          <label className="blog-label" htmlFor="title">Title:</label>
          <input
            type="text"
            autoComplete="username"
            name="title"
            value={post.title}
            onChange={this.handleChange("title")}
          />
          <label className="blog-label" htmlFor="content">Content:</label>
          <textarea
            name="content"
            rows="10"
            value={post.content}
            onChange={this.handleChange("content")}
          >
          </textarea>
          <label className="blog-label" htmlFor="topics">Topics:</label>
          <input
            type="text"
            autoComplete="topics"
            name="topics"
            value={post.topics}
            onChange={this.handleChange("topics")}
          />
          <small>Comma separated</small>
          <button type="submit">Update</button>
        </form>
      </section>
    )
  }
}

export default EditBlog;
