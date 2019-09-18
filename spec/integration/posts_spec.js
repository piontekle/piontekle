const request = require("request");
const server = require("../../src/server/server");
const base = "http://localhost:8080/api/";
const sequelize = require("../../src/server/db/models/index").sequelize;
const Post = require("../../src/server/db/models").Post;

describe("routes : posts", () => {
  beforeEach((done) => {
    this.post;
    sequelize.sync({ force: true }).then(() => {
      Post.create({
        title: "Post Stuff",
        content: "This is post content.",
        topics: ["posts", "tests"],
        slug: "post-stuff"
      })
      .then((res) => {
        this.post = res;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  describe("GET /posts", () => {
    it("should get all posts", (done) => {
      request.get(`${base}posts`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("retrieved all posts");
        done();
      })
    })
  });

  describe("GET /:id", () => {
    it("should return the selected post", (done) => {
      request.get(`${base}${this.post.id}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Post Stuff");
        done();
      })
    })
  });

  describe("POST /new-post", () => {
    it("should create a new post", (done) => {
      const options = {
        url: `${base}new-post`,
        form: {
          title: "New Post",
          content: "This is new content",
          topics: "posters",
          slug: "new-post"
        }
      };

      request.post(options, (err, res, body) => {
        Post.findOne({ where: {title: "New Post"} })
        .then((post) => {
          expect(post.title).toBe("New Post");
          expect(post.content).toBe("This is new content");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      })

    })
  });

  describe("POST /:id/update", () => {
    it("should update the post with the given values", (done) => {
      const options = {
        url: `${base}${this.post.id}/update`,
        form: {
          title: "This Post Stuff",
          content: "Yasss queen yasss",
          topics: "posts, tests",
          slug: "this-post-stuff"
        }
      };

      request.post(options, (err, res, body) => {
        expect(err).toBeNull();

        Post.findByPk(this.post.id)
        .then((post) => {
          expect(post.title).toBe("This Post Stuff");
          expect(post.content).toBe("Yasss queen yasss");
          expect(post.topics).toEqual(["posts", "tests"]);
          done();
        })
      })
    })
  });

  describe("POST /:id/delete", () => {
    it("should delete the post with the associated ID", (done) => {
      Post.findAll()
      .then((posts) => {
        const postCountBefore = posts.length;
        expect(postCountBefore).toBe(1);

        request.post(`${base}${this.post.id}/delete`, (err, res, body) => {
          Post.findAll()
          .then((posts) => {
            expect(err).toBeNull();
            expect(posts.length).toBe(postCountBefore - 1);
            done();
          })
        })
      })
    })
  });

});
