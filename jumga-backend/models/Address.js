module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("Address", {
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    full_address: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    state: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    },
  });

  return Address;
};
