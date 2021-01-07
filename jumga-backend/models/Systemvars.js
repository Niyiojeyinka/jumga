module.exports = (sequelize, Sequelize) => {
  const Systemvars = sequelize.define("Systemvars", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Systemvars;
};
