module.exports = (sequelize, Sequelize) => {
  const Country = sequelize.define("Country", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shortcode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    currency: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "suspended"],
    },
  });

  return Country;
};
