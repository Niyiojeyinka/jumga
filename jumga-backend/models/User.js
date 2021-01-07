module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country_id: {
      type: Sequelize.INTEGER,
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
    status: {
      type: DataTypes.ENUM,
      values: ["active", "pending", "suspended"],
    },
  });

  return User;
};
