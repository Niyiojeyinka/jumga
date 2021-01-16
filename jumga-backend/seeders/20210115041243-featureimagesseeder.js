"use strict";
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
    let images = ["public/products/tv.jpg", "public/products/mob.jpg"];
    let Featureimages = [];
    for (let i = 0; i < 50; i++) {
      let image = {
        slug: images[Math.floor(Math.random() * 2)],
        ProductId: i + 1, //Math.floor(Math.random() * 50) + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      Featureimages.push(image);
      Featureimages.push(image);
    }

    await queryInterface.bulkInsert("Featureimages", Featureimages, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Featureimages", null, {});
  },
};
