import React, { Component } from 'react';
import axios from 'axios';

import getURL from '../functions/getURL';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      posts: this.props.url
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <section className="page-heading">
          <h2>Woo Blog</h2>
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

export default Blog;
