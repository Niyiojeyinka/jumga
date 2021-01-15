"use strict";
//const faker = require("faker");

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
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Supermarket",
          slug: "Supermarket",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Health & Beauty",
          slug: "Health-Beauty",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Computing",
          slug: "Computing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electronics",
          slug: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Home & Office",
          slug: "Home-Office",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baby Products",
          slug: "Baby-Products",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gaming",
          slug: "Gaming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Automobile",
          slug: "Automobile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phones & Tablets",
          slug: "Phones-Tablets",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Others",
          slug: "others",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Categories", null, {});
  },
};
