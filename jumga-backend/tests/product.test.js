const request = require("supertest");
const app = require("../app");
const db = require("../models/");
const expect = require("chai").expect;

describe("api/products Products Test ", () => {
  it("Product can be added", async () => {
    const response = await request(app).post("/api/products").send({
      name: "product name",
      description: "product description",
      category_id: 3,
      merchant_id: 4,
      in_stock: 3,
      price: 6778.67,
    });

    expect(response.status).to.be.equal(201);
  });

  it("Product can be Edited", async () => {
    const response = await request(app).put("api/products/1").send({
      name: "new product name",
      description: "product description",
      category_id: 3,
      merchant_id: 4,
      in_stock: 3,
      price: 6778.67,
    });

    expect(response.body.data.product.title).to.be.equal("new product name");
  });
});
/*
afterAll(async () => {
  await db.sequelize.close();
});
*/
