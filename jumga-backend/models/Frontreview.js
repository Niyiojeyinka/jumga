module.exports = (sequelize, Sequelize) => {
  const Frontreview = sequelize.define("Frontreview", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    review: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });

  return Frontreview;
};
