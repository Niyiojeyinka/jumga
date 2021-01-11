module.exports = (sequelize, Sequelize) => {
  const Wishlist = sequelize.define("Wishlist", {
    ProductId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Wishlist;
};
