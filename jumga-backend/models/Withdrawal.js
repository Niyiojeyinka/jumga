module.exports = (sequelize, Sequelize) => {
  const Withdrawal = sequelize.define("Withdrawal", {
    status: {
      type: Sequelize.ENUM,
      values: ["successful", "pending", "failed"],
    },
    type: {
      type: Sequelize.ENUM,
      values: ["deposit", "payment"],
    },
    payee_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payee_type: {
      type: Sequelize.ENUM,
      values: ["merchant", "dispatcher"],
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

  return Withdrawal;
};
