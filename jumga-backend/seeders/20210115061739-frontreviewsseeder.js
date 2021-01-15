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

    await queryInterface.bulkInsert(
      "Frontreviews",
      [
        {
          name: faker.name.findName(),
          role: faker.name.jobTitle(),
          review: faker.lorem.sentences(),
          image: faker.image.avatar(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          role: faker.name.jobTitle(),
          review: faker.lorem.sentences(),
          image: faker.image.avatar(),
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
    await queryInterface.bulkDelete("Frontreviews", null, {});
  },
};
