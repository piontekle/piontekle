const express = require('express');
const app = express();

const postQueries = require('../db/queries.posts.js')

app.get('/api/posts', (req, res, next) => {
  postQueries.getAllPosts((err, posts) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json({ msg: 'retrieved all posts', posts: posts });
    }
  })
});

app.get('/api/:id', (req, res, next) => {
  postQueries.getPost(req.params.id, (err, post) => {
    if (err || post === null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ msg: 'post retrieved', post: post });
    }
  })
});

app.post('/api/new-post', (req, res, next) => {
  let newPost = {
    title: req.body.title,
    content: req.body.content,
    topics: req.body.topics
  }

  postQueries.newPost(newPost, (err, post) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json({ msg: 'post created' });
    }
  })
});

app.post('/api/:id/update', (req, res, next) => {
  postQueries.updatePost(req, req.body, (err, post) => {
    if (err || post === null) {
      res.status(404).json({ msg: `Error updating post: ${err}`});
    } else {
      res.status(200).json({ msg: 'post successfully updated' });
    }
  })
});

app.post('/api/:id/delete', (req, res, next) => {
  postQueries.deletePost(req, (err, post) => {
    if (err) {
      console.log()
      res.status(500).json({ msg: 'Error deleting post' });
    } else {
      res.status(200).json({ msg: 'post successfully deleted' });
    }
  })
});

module.exports = app;
