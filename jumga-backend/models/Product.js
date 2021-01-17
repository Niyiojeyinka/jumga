module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Product", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    CategoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    MerchantId: {
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
    sku: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    model: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    weight: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM,
      values: ["published", "draft", "deleted"],
      defaultValue: "draft",
    },
  });

  return Product;
};
