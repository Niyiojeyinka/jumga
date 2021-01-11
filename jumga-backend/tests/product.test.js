const { describe, test, expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");
const db = require("../models/");

beforeAll(() => {
  // force: true will drop the table if it already exists
  db.sequelize.sync({ force: true });
});

describe("api/products Products Test ",()=>{
   test("Product can be added",(done)=>{
        const response = await request(app).post("/api/products").send({
            name :"product name",
            description:"product description",
            category_id:3,
            merchant_id:4,
            in_stock:3,
            price:6778.67,
        });

        expect(response.status).toEqual(201);
   })

    test("Product can be Edited",(done)=>{
        const response = await request(app).put("api/products/1").send({
            name :"new product name",
            description:"product description",
            category_id:3,
            merchant_id:4,
            in_stock:3,
            price:6778.67,
        });

        expect(response.body.data.product.title).toEqual("new product name");
   })
}); 