module.exports = (sequelize, Sequelize) => {
  const Merchant = sequelize.define("Merchant", {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "pending", "suspended"],
      defaultValue: "pending",
    },
  });

  return Merchant;
};
