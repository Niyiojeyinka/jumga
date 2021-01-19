module.exports = (sequelize, Sequelize) => {
  const Merchant = sequelize.define("Merchant", {
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    subAccountId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "pending", "suspended"],
      defaultValue: "pending",
    },
  });
  return Merchant;
};
