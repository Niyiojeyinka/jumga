module.exports = (sequelize, Sequelize) => {
  const Dispatcher = sequelize.define("Dispatcher", {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "pending", "suspended"],
      defaultValue: "active",
    },
  });

  return Dispatcher;
};
