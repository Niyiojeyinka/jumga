module.exports = (sequelize, Sequelize) => {
  const Dispatcher = sequelize.define("Dispatcher", {
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

  return Dispatcher;
};
