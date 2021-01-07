module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Product", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    merchant_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    in_stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "pending", "deleted"],
    },
  });

  return Product;
};
