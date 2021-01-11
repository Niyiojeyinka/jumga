module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("Order", {
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
    status: {
      type: Sequelize.ENUM,
      values: ["pending-delivery", "pending", "fulfilled", "canceled"],
      defaultValue: "pending",
    },
  });

  return Order;
};
