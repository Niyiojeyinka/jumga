const request = require("supertest");
const app = require("../app");
const db = require("../models/");
const expect = require("chai").expect;
const testhelper = require("./helper");
beforeEach(function (done) {
  setTimeout(function () {
    done();
  }, 200);
});
describe("api/products Products Test ", () => {
  it("Product can be added", async () => {
    await request(app).post("/api/auth/create").send({
      name: "Olaniyi ojeyinka",
      country_code: "ng",
      user_type: "merchant",
      email: "olaniyiojeyinka@gmail.com",
      password: "test1234",
      url: "www.frontend.com",
    });
    await db.Category.create({
      name: "Electronics",
      slug: "Electronics",
    });
    const response = await request(app).post("/api/products/").send({
      name: "product name",
      description: "product description",
      category_id: 1,
      merchant_id: 1,
      sku: "skusku",
      color: "blue",
      weight: "56Kg",
      model: "tt",
      in_stock: 3,
      price: 6778.67,
      status: "published",
    });

    expect(response.status).to.be.equal(201);
  });
  it("Product can be Edited", async () => {
    const response = await request(app).put("/api/products/1").send({
      name: "new product name",
      description: "product description",
      category_id: 1,
      merchant_id: 1,
      in_stock: 3,
      sku:"skusku",
      color:"blue",
      weight:"56Kg",
      model:"tt",
      price: 6778.67,
      status: "published",
    });
    expect(response.status).to.be.equal(200);
  });
});

/*
after(() => {
  
});*/
