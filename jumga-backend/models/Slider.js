module.exports = (sequelize, Sequelize) => {
  const Slider = sequelize.define("Slider", {
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Slider;
};
