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
    status: {
      type: DataTypes.ENUM,
      values: ["active", "suspended"],
    },
  });

  return Country;
};
