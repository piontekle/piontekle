import React, { Component } from 'react';
import axios from 'axios';

import getURL from '../functions/getURL';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ''
    }
  }

  async componentDidMount() {
    let url = getURL();

    await axios.get(`${url}/api/${this.props.location.state.id}`)
    .then(res => {
      this.setState({
        post: res.data.post
      })
    })
    .catch(err => {
      alert(err);
    })
  }

  render() {
    const { post } = this.state;

    return (
      <>
        <section className="page-heading">
          <h2>{post.title}</h2>
          <p>{post.createdAt}</p>
        </section>
        <section>
          <p>{post.content}</p>
        </section>
      </>
    )
  }
}

export default BlogPost;
