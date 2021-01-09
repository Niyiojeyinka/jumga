module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("Payment", {
    status: {
      type: Sequelize.ENUM,
      values: ["successful", "pending", "failed"],
    },
    type: {
      type: Sequelize.ENUM,
      values: ["deposit", "payment"],
    },
    payer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payer_type: {
      type: Sequelize.ENUM,
      values: ["user", "merchant", "dispatcher"],
    },
    ref: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  return Payment;
};
