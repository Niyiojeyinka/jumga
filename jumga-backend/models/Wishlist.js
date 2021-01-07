module.exports = (sequelize, Sequelize) => {
  const Wishlist = sequelize.define("Wishlist", {
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Wishlist;
};
