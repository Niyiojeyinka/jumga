const request = require("supertest");
const app = require("../app");
const db = require("../models/");

beforeAll(() => {
  // force: true will drop the table if it already exists
  db.sequelize.sync({ force: true });
});

describe("/api/auth/user/create USER registration", () => {
  test("New User can register", async (done) => {
    const response = await request(app).post("/api/auth/signup").send({
      name: "john doe",
      country_code: "ng",
      user_type: "customer",
      email: "test@test.com",
      password: "test1234",
    });

    expect(response.status).toEqual(201);
    done();
  });
});

describe("/api/auth/signin USER authentication ", () => {
  test("User can sign in", async (done) => {
    const response = await request(app).post("/api/auth/signin").send({
      email: "test@test.com",
      password: "test1234",
    });

    expect(response.status).toEqual(200);
    done();
  });

  test("Wrong User Details can't  sign in", async (done) => {
    const response = await request(app).post("/api/auth/signin").send({
      email: "test@test.com",
      password: "wrongtest1234",
    });

    expect(response.status).toEqual(401);
    done();
  });
});

describe("/api/auth/changepassword Password recovery test", () => {
  test(" New password working", async (done) => {
    const response = await request(app).post("/api/auth/changepassword").send({
      token: "token",
      password: "newtest1234",
    });

    expect(response.status).toEqual(200);
    done();
  });
  test("wrong token not working", async (done) => {
    const response = await request(app).post("/api/auth/changepassword").send({
      token: "wrongtoken",
      password: "newtest1234",
    });

    expect(response.status).toEqual(401);
    done();
  });
});

afterAll(async () => {
  await db.sequelize.close();
});
