import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: this.props.posts
    }
  }

  componentDidMount() {
    this.setState({
      loading: false,
      posts: this.props.posts
    });
  }

  // {
  //   posts[0] === undefined ? "No posts yet... Coming Soon!" :
  //   posts.map((post) => {
  //     return <Link
  //       className="link"
  //       to={`/blog/${post.id}/${post.slug}`}
  //       key={post.id}
  //     >
  //       <li>
  //         {post.title}
  //         <span className="date">{new Date(post.createdAt).toDateString()}</span>
  //       </li>
  //     </Link>
  //   })
  // }

  render() {
    return (
          <>
            <section className="page-heading">
              <h2>Blog</h2>
            </section>
            <section className="card list-card">
              <ul>
                <p className="blog-announcement">Blog under maintenance. Be back soon :)</p>
              </ul>
            </section>
          </>
    )
  }
}

export default Blog;
