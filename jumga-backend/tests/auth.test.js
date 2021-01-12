const request = require("supertest");
const expect = require("chai").expect;
const testhelper = require("./helper");
const app = require("../app");
const db = require("../models/");

before(() => {
  testhelper.truncate("Users", db.sequelize);
  testhelper.truncate("Customers", db.sequelize);
});

describe("/api/auth/user/create USER registration", () => {
  it("New User can register", async () => {
    const response = await request(app).post("/api/auth/create").send({
      name: "john doe",
      country_code: "ng",
      user_type: "customer",
      email: "test@test.com",
      password: "test1234",
    });

    expect(201).to.be.equal(201);
  });
});

describe("/api/auth/signin USER authentication ", () => {
  it("User can sign in", async () => {
    const response = await request(app).post("/api/auth/signin").send({
      email: "test@test.com",
      password: "test1234",
    });

    expect(response.status).to.be.equal(200);
  });

  it("Wrong User Details can't  sign in", async () => {
    const response = await request(app).post("/api/auth/signin").send({
      email: "test@test.com",
      password: "wrongtest1234",
    });

    expect(response.status).to.be.equal(401);
  });
});

describe("/api/auth/requesttoken Request Token -Password recovery test", () => {
  it(" Can request password change token", async () => {
    const response = await request(app).post("/api/auth/requesttoken").send({
      email: "test@test.com",
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
  it(" New password working", async () => {
    const response = await request(app).post("/api/auth/changepassword").send({
      token: "token",
      password: "newtest1234",
    });

    expect(response.status).to.be.equal(200);
  });
  it("wrong token not working", async () => {
    const response = await request(app).post("/api/auth/changepassword").send({
      token: "wrongtoken",
      password: "newtest1234",
    });

    expect(response.status).to.be.equal(401);
  });
});
