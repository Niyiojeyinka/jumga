"use strict";
const faker = require("faker");
const profileimg =
  "data:image/jpeg;base64,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";
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
          image: profileimg,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          role: faker.name.jobTitle(),
          review: faker.lorem.sentences(),
          image: profileimg,
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
