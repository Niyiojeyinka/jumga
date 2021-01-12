module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email_v_status: {
      type: Sequelize.ENUM,
      values: ["success", "pending"],
      defaultValue: "pending",
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM,
      values: ["customer", "dispatcher", "merchant", "admin"],
      defaultValue: "customer",
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "pending", "suspended"],
      defaultValue: "active",
    },
  });

  return User;
};
