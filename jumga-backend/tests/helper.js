exports.truncate = (tableName, sequelize) => {
  sequelize.transaction(function (t) {
    var options = { raw: true, transaction: t };

    sequelize
      .query("SET FOREIGN_KEY_CHECKS = 0", null, options)
      .then(function () {
        return sequelize.query("truncate table " + tableName, null, options);
      })
      .then(function () {
        return sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null, options);
      })
      .then(function () {
        return t.commit();
      });
  });
};
