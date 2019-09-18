import React, { Component } from 'react';
import axios from 'axios';
import { Remarkable } from 'remarkable';
var md = new Remarkable();

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
      res.data.post.content = md.render(res.data.post.content);

      this.setState({ post: res.data.post });
    })
    .catch(err => {
      alert(err);
    })
  }

  render() {
    const { post } = this.state;
    let posted = new Date(post.createdAt).toDateString();

    return (
      <>
        <section className="page-heading">
          <h2 className="blog-title">{post.title}<small className="date title-date">{posted}</small></h2>
          <div className="topics">
          { post.topics ? post.topics.map((topic) => {
              return <span className="topic">{topic}</span>
            }) : null
          }
          </div>
        </section>
        <section>
          <p dangerouslySetInnerHTML={{__html: post.content}} />
        </section>
      </>
    )
  }
}

export default BlogPost;
