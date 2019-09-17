import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import getURL from '../functions/getURL';

class AdminBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      posts: this.props.posts
    }
  }

  signOut(e) {
    e.preventDefault();
    const { url } = this.state;

    axios.post(`${url}/api/admin-out`)
    .then(res => {
      window.location = "/";
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleDelete(e, postId) {
    e.preventDefault();
    const { url } = this.state;

    axios.post(`${url}/api/${postId}/delete`)
    .then(res => {
      alert('Post deleted!');
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
      const { posts } = this.state;

    return (
      <>
        <section className="page-heading">
          <h2>Woo Admin Blog</h2>
          <Link className="link" to="/new-post">New Post</Link>
          <button onClick={this.signOut.bind(this)}>Sign Out</button>
        </section>
        <section className="card">
        <ul>
        {
          posts ? "No posts yet" :
          posts.map(post => {
            <li
              key={post.id}
            >
              <Link
                className="link"
                pathname={`/blog/${post.slug}`}
                state={ {id: post.id} }
              >
                {post.title} {post.createdAt}
              </Link>
              <Link className="link" to={`/${post.id}/edit-post`}>Edit</Link>
              <button onClick={this.handleDelete(e, post.id)}>Delete</button>
            </li>
          })
        }
        </ul>
        </section>
      </>
    )
  }
}

export default AdminBlog;
