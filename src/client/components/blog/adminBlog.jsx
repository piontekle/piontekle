import React, { Component } from 'react';
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

  render() {
    return (
      <>
        <section className="page-heading">
          <h2>Woo Admin Blog</h2>
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
              {post.title} {post.createdAt}
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
