module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("Admin", {
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "pending", "suspended"],
      defaultValue: "pending",
    },
  });
  return Admin;
};
