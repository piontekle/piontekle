import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import getURL from '../../utilities/getURL';

class AdminBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      posts: this.props.posts
    }
  }

  signOut() {
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
    const { url, posts } = this.state;

    let updatedPosts = posts.filter(post => post.id !== postId);

    axios.post(`${url}/api/${postId}/delete`)
    .then(res => {
      alert('Post deleted!');
      this.setState({ posts: updatedPosts });
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
          <h2>Admin Blog</h2>
          <button><Link className="link" to="/new-post">New Post</Link></button>
          <button onClick={this.signOut.bind(this)}>Sign Out</button>
        </section>
        <section className="card list-card">
        <ul>
        {
          posts[0] === undefined ? "No posts yet" :
          posts.map(post => {
            return <div key={post.id}><Link
                className="link"
                to={`/blog/${post.id}/${post.slug}`}
              >
                <li>
                  {post.title} <span className="date">{new Date(post.createdAt).toDateString()}</span>
                </li>
              </Link>
              <button><Link className="link" to={`/${post.id}/edit-post`}>Edit</Link></button>
              <button onClick={(e, id) => this.handleDelete(e, post.id)}>Delete</button>
              </div>
          })
        }
        </ul>
        </section>
      </>
    )
  }
}

export default AdminBlog;
