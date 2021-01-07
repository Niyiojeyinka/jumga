module.exports = (sequelize, Sequelize) => {
  const Withdrawal = sequelize.define("Withdrawal", {
    status: {
      type: DataTypes.ENUM,
      values: ["successful", "pending", "failed"],
    },
    type: {
      type: DataTypes.ENUM,
      values: ["deposit", "payment"],
    },
    payee_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payee_type: {
      type: DataTypes.ENUM,
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
