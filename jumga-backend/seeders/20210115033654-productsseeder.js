"use strict";
const { fake } = require("faker");
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    let products = [];
    for (let i = 0; i < 50; i++) {
      let product = {
        name: faker.commerce.productName(),
        description:
          faker.commerce.productDescription() +
          "<br><br>" +
          faker.lorem.paragraphs() +
          "<br><br>" +
          faker.lorem.paragraphs(),
        CategoryId: Math.floor(Math.random() * 9) + 1,
        MerchantId: 1,
        in_stock: Math.floor(Math.random() * 9) + 1,
        price: faker.commerce.price(),
        sku: faker.random.uuid(),
        model: faker.vehicle.model(),
        weight: Math.floor(Math.random() * 10) + "kg",
        color: faker.commerce.color(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      products.push(product);
    }

    await queryInterface.bulkInsert("Products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
