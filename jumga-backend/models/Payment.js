module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("Payment", {
    status: {
      type: DataTypes.ENUM,
      values: ["successful", "pending", "failed"],
    },
    type: {
      type: DataTypes.ENUM,
      values: ["deposit", "payment"],
    },
    payer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payer_type: {
      type: DataTypes.ENUM,
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
