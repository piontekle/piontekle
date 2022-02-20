import React, { Component } from 'react';
import axios from 'axios';
import './blog.css';

import getURL from '../../utilities/getURL';

import AdminBlog from './adminBlog';
import Blog from './blog';

class BlogIndex extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      url: null,
      admin: false,
      posts: []
    }
  }

/* GET posts, set url, admin, and post attributes for passing to respective
components */
  async componentDidMount() {
    let url = getURL();

    await axios.get(`${url}/api/posts`)
    .then(res => {
      this.setState({
        loading: false,
        url: url,
        admin: this.props.admin || false,
        posts: res.data.posts
      });
    })
    .catch(err => {
      alert(err);
    })
  }

  render() {
    const { loading, url, admin, posts } = this.state;

    return (
      <>
        { loading ?
          <div>
            LOADING... It could take up to 30s on initial load, thank you for your patience!
          </div> : (admin ?
          <AdminBlog
            url={url}
            posts={posts}
          /> :
          <Blog
            url={url}
            posts={posts}
          />)
        }
      </>
    )
  }
}

export default BlogIndex;
