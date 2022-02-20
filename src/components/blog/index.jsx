import React, { Component } from 'react';
import './blog.css';

import Blog from './blog';

class BlogIndex extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      posts: []
    }
  }

/* GET posts, set url, admin, and post attributes for passing to respective
components */
  async componentDidMount() {
    // let url = getURL();

    // await axios.get(`${url}/api/posts`)
    // .then(res => {
    //   this.setState({
    //     loading: false,
    //     url: url,
    //     admin: this.props.admin || false,
    //     posts: res.data.posts
    //   });
    // })
    // .catch(err => {
    //   alert(err);
    // })
    this.setState({ loading: false, posts: [] });
  }

  render() {
    const { loading, posts } = this.state;

    return (
      <Blog
        loading={loading}
        posts={posts}
      />
    )
  }
}

export default BlogIndex;
