module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("Contact", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    status: {
      type: Sequelize.ENUM,
      values: ["unread", "read", "draft"],
    },
  });

  return Contact;
};
