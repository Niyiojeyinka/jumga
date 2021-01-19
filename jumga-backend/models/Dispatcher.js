module.exports = (sequelize, Sequelize) => {
  const Dispatcher = sequelize.define("Dispatcher", {
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
      defaultValue: "active",
    },
  });

  return Dispatcher;
};
