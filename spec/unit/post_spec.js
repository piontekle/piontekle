const sequelize = require("../../src/server/db/models/index").sequelize;
const Post = require("../../src/server/db/models").Post;

describe("Post", () => {
  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      Post.create({
        title: "Post Stuff",
        content: "testing posts units",
        topics: ["posts"],
        slug: "post-stuff"
      })
      .then((post) => {
        this.post = post;
        done();
      })
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe("#create()", () => {
    it("should create a Post object with title and content", (done) => {
      Post.create({
        title: "How to Blog",
        content: "All about blogging",
        topics: ["blogging"],
        slug: "how-to-blog"
      })
      .then((post) => {
        expect(post.title).toBe("How to Blog");
        expect(post.id).toBe(2);
        expect(post.content).toBe("All about blogging");
        expect(post.topics).toEqual(["blogging"]);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it("should not create a Post with null title content, or slug", (done) => {
      Post.create({
        title: null,
        content: "123456",
        slug: "null-days"
      })
      .then(() => {
        //expect failure
      })
      .catch((err) => {
        expect(err.message).toContain("cannot be null");
        done();
      });
    });
  });

  describe("#destroy", () => {
    it("should destroy selected Post", (done) => {
      Post.findByPk(this.post.id)
      .then((post) => {
        post.destroy()
        .then(() => {
          Post.findByPk(1)
          .then((post) => {
            expect(post).toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err)
            done();
          })
        })
      })
    })
  });

})
