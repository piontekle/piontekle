import React, { Component } from 'react';
import axios from 'axios';

import getURL from '../functions/getURL';

class EditBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      id: this.props.match.params.id,
      title: '',
      content: '',
      topics: []
    }
  }

  async componentDidMount() {
    let url = getURL();

    await axios.get(`${url}/api/${this.state.id}`)
    .then(res => {
      /* let topics = res.data.post.topics.join(", "); */

      this.setState({
        url: url,
        title: res.data.post.title,
        content: res.data.post.content,
        topics: res.data.post.topics || ''
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
    const { id, title, content, topics } = this.state;
    let url = getURL();

    let slug = title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');

    axios.post(`${url}/api/${id}/update`, {
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
            onChange={this.handleChange("title")}
          />
          <label className="blog-label" htmlFor="content">Content:</label>
          <textarea
            name="content"
            rows="10"
            value={content}
            onChange={this.handleChange("content")}
          >
          </textarea>
          <label className="blog-label" htmlFor="topics">Topics:</label>
          <input
            type="text"
            autoComplete="topics"
            name="topics"
            value={topics}
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
