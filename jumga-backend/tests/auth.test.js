const request = require("supertest");
const expect = require("chai").expect;
const testhelper = require("./helper");
const app = require("../app");
const db = require("../models/");

before(() => {
  testhelper.truncate("Merchants", db.sequelize);
  testhelper.truncate("Products", db.sequelize);
  testhelper.truncate("Categories", db.sequelize);
  testhelper.truncate("Users", db.sequelize);
  testhelper.truncate("Customers", db.sequelize);
});

beforeEach(function (done) {
  setTimeout(function () {
    done();
  }, 500);
});
describe("/api/auth/user/create USER registration", () => {
  it("New User can register", async () => {
    const response = await request(app).post("/api/auth/create").send({
      name: "Olaniyi ojeyinka",
      country_code: "ng",
      user_type: "customer",
      email: "olaniyiojeyinka@gmail.com",
      password: "test1234",
      url: "www.frontend.com",
    });

    expect(response.status).to.be.equal(201);
  });
});

describe("/api/auth/signin USER authentication ", () => {
  it("User can sign in", async () => {
    const response = await request(app).post("/api/auth/signin").send({
      email: "olaniyiojeyinka@gmail.com",
      password: "test1234",
    });

    expect(response.status).to.be.equal(200);
  });

  it("Wrong User Details can't  sign in", async () => {
    const response = await request(app).post("/api/auth/signin").send({
      email: "olaniyiojeyinka@gmail.com",
      password: "wrongtest1234",
    });

    expect(response.status).to.be.equal(401);
  });
});

describe("/api/auth/requesttoken Request Token -Password recovery test", () => {
  it(" Can request password change token", async () => {
    const response = await request(app).post("/api/auth/requesttoken").send({
      email: "olaniyiojeyinka@gmail.com",
      url: "url.com.ng/verify",
    });

    expect(response.status).to.be.equal(200);
  });

  it("Cannot request token for wrong email", async () => {
    const response = await request(app).post("/api/auth/requesttoken").send({
      email: "testweong@test.com",
      url: "url.com.ng/verify",
    });

    expect(response.status).to.be.equal(400);
  });
});

describe("/api/auth/changepassword Password recovery test", () => {
  it(" Right Token can change password", async () => {
    //insert token
    await db.User.update(
      { token: "lets" },
      {
        where: {
          email: "olaniyiojeyinka@gmail.com",
        },
      }
    );
    const response = await request(app).post("/api/auth/changepassword").send({
      token: "lets",
      password: "hey",
    });

    expect(response.status).to.be.equal(200);
  });
  it("New password working", async () => {
    const response = await request(app).post("/api/auth/signin").send({
      email: "olaniyiojeyinka@gmail.com",
      password: "hey",
    });

    expect(response.status).to.be.equal(200);
  });
  it("wrong token not working", async () => {
    const response = await request(app).post("/api/auth/changepassword").send({
      token: "wrongtoken",
      password: "newtest1234",
    });

    expect(response.status).to.be.equal(400);
  });
});
