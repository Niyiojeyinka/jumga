module.exports = (sequelize, Sequelize) => {
  const Featureimage = sequelize.define("Featureimage", {
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ProductId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Featureimage;
};
