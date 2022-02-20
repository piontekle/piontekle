import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
              <h2>Blog</h2>
            </section>
            <section className="card list-card">
              <ul>
              {
                posts[0] === undefined ? "No posts yet... Coming Soon!" :
                posts.map((post) => {
                  return <Link
                    className="link"
                    to={`/blog/${post.id}/${post.slug}`}
                    key={post.id}
                  >
                    <li>
                      {post.title}
                      <span className="date">{new Date(post.createdAt).toDateString()}</span>
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
