module.exports = (sequelize, Sequelize) => {
  const Withdrawalsetting = sequelize.define("Withdrawalsetting", {
    bank_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    account_no: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    PayeeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payee_type: {
      type: Sequelize.ENUM,
      values: ["merchant", "dispatcher"],
    },
  });

  return Withdrawalsetting;
};
