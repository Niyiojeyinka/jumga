module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("Cart", {
    ProductId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  return Cart;
};
