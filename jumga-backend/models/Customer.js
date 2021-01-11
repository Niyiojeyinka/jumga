module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("Customer", {
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "pending", "suspended"],
      defaultValue: "active",
    },
  });

  return Customer;
};
