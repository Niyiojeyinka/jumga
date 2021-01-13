module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("Category", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Category;
};
