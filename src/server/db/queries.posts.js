const Post = require('./models').Post;

module.exports = {
  getAllPosts(callback) {
    return Post.findAll()
    .then(posts => {
      callback(null, posts);
    })
    .catch(err => {
      callback(err);
    })
  },
  getPost(id, callback) {
    return Post.findByPk(id)
    .then(post => {
      callback(null, post);
    })
    .catch(err => {
      callback(err);
    })
  },
  newPost(newPost, callback) {
    return Post.create({
      title: newPost.title,
      content: newPost.content,
      topics: newPost.topics
    })
    .then(post => {
      callback(null, post);
    })
    .catch(err => {
      callback(err);
    })
  },
  updatePost(req, updatedPost, callback) {
    return Post.findByPk(req.params.id)
    .then(post => {
      if(!post) {
        return callback("Post not found");
      }

      post.update(updatedPost, { fields: Object.keys(updatedPost) })
      .then(() => {
        callback(null, post);
      })
      .catch(err => {
        callback(err);
      })
    })
  },
  deletePost(req, callback) {
    return Post.findByPk(req.params.id)
    .then(post => {
      post.destroy()
      .then(res => {
        callback(null, post);
      })
    })
    .catch(err => {
      callback(err);
    })
  }
}
