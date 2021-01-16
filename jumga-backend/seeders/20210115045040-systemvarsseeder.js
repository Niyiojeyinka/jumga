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
      "Systemvars",
      [
        {
          name: "contactEmail",
          value: "contact@jumga.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tagline",
          value: "The Best Price you can trust",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "facebook",
          value: "www.facebook.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "instagram",
          value: "www.instagram.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "twitter",
          value: "www.twitter.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "supportMobile",
          value: "+234-7086-8254",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "address",
          value: "60-49 Road 11378 New York,Mars Destrict ,Multiverse",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "activationFee",
          value: 50,
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
    await queryInterface.bulkDelete("Systemvars", null, {});
  },
};
