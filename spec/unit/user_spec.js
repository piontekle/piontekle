const sequelize = require("../../src/server/db/models/index").sequelize;
const User = require("../../src/server/db/models").User;

describe("User", () => {
  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe("#create()", () => {
    it("should create a User object with email and password", (done) => {
      User.create({
        username: "admin",
        password: "123456"
      })
      .then((user) => {
        expect(user.username).toBe("admin");
        expect(user.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it("should not create a user with null username or password", (done) => {
      User.create({
        username: null,
        password: "123456"
      })
      .then((user) => {
        //expect failure
      })
      .catch((err) => {
        expect(err.message).toContain("cannot be null");
        done();
      });
    });
  });

})
