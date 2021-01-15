function applyExtraSetup(sequelize) {
  const {
    Merchant,
    Product,
    User,
    Dispatcher,
    Customer,
    Category,
    Order,
    Cart,
    Featureimage,
    Payment,
    Wishlist,
    Withdrawalsetting,
    Withdrawal,
    Address,
    Account,
    Admin,
  } = sequelize.models;

  Merchant.hasMany(Product);
  Product.belongsTo(Merchant);
  User.hasOne(Merchant);
  User.hasOne(Admin);
  User.hasOne(Dispatcher);
  User.hasOne(Customer);
  User.hasMany(Payment, {
    foreignKey: "PayerId",
  });
  User.hasMany(Wishlist);
  User.hasMany(Order);
  User.hasMany(Address);
  User.hasMany(Cart);
  Category.hasMany(Product);
  Product.hasMany(Featureimage, {
    foreignKey: "ProductId",
    as: "images",
  });
  Featureimage.belongsTo(Product, {
    foreignKey: "id",
    as: "product",
  });
  User.hasOne(Withdrawalsetting);
  User.hasOne(Account);
  User.hasMany(Withdrawal, {
    foreignKey: "PayeeId",
  });
}

module.exports = { applyExtraSetup };
