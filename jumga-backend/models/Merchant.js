module.exports = (sequelize, Sequelize) => {
  const Merchant = sequelize.define("Merchant", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email_token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email_v_status: {
      type: DataTypes.ENUM,
      values: ["success", "pending"],
    },
    dispatcher_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    account_bal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    total_earned: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "pending", "suspended"],
    },
  });

  return Merchant;
};
