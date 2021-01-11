module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("Account", {
    UserId: {
      type: Sequelize.INTEGER,
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
  });

  return Account;
};
