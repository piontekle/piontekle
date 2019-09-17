import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './blog.css';

import getURL from '../functions/getURL';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      url: this.props.url,
      posts: this.props.posts
    }
  }

  componentDidMount() {
    this.setState({
      loading: false,
      posts: this.props.posts
    });
  }

  render() {
    const { loading, posts } = this.state;

    return (
        !loading &&
          <>
            <section className="page-heading">
              <h2>Woo Blog</h2>
            </section>
            <section className="card list-card">
              <ul>
              {
                posts[0] === undefined ? "No posts yet" :
                posts.map((post) => {
                  return <Link
                    className="link"
                    to={{pathname: `/blog/${post.slug}`,
                    state: { id: post.id }}}
                  >
                    <li key={post.id}>
                      {post.title} {post.createdAt}
                    </li>
                  </Link>
                })
              }
              </ul>
            </section>
          </>
    )
  }
}

export default Blog;
