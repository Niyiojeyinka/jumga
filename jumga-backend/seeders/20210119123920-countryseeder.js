"use strict";

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
     *
     */

    await queryInterface.bulkInsert(
      "Countries",
      [
        {
          name: "Nigeria",
          shortcode: "ng",
          currency: "NGN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kenya",
          shortcode: "ke",
          currency: "KES",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "United Kingdom",
          shortcode: "uk",
          currency: "GBP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghana",
          shortcode: "gh",
          currency: "GHS",
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
     *
     */
    await queryInterface.bulkDelete("Countries", null, {});
  },
};
