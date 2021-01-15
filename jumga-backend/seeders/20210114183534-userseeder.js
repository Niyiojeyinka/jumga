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
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          country_code: "ng",
          email: "olaniyiojeyinka@gmail.com",
          password:
            "$2b$10$cDqeV6pNtpdcGxTCybmflOWCg3l32leyqaOGF./IIQzYBkD/XNI4S",
          role: "merchant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Good Sky",
          country_code: "ng",
          email: "niyiojeyinka@gmail.com",
          password:
            "$2b$10$cDqeV6pNtpdcGxTCybmflOWCg3l32leyqaOGF./IIQzYBkD/XNI4S",
          role: "dispatcher",
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
