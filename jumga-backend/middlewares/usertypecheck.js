const db = require("../models");

module.exports = async (req, res, next) => {
  try {
    if (req.body.userType == "merchant") {
      const merchant = await db.Merchant.findOne({
        where: {
          UserId: req.body.userId,
        },
      });

      if (merchant) {
        next();
      } else {
        throw new Error("Account not a merchant");
      }
    } else if (req.body.userType == "dispatcher") {
      const dispatcher = await db.Dispatcher.findOne({
        where: {
          UserId: req.body.userId,
        },
      });
      if (dispatcher) {
        next();
      } else {
        throw new Error("Account not a dispatcher");
      }
    } else if (req.body.userType == "admin") {
      const admin = await db.Admin.findOne({
        where: {
          UserId: req.body.userId,
        },
      });
      if (admin) {
        next();
      } else {
        throw new Error("Account not a admin");
      }
    }
  } catch (e) {
    res.status(400).json({
      result: 0,
      error: e.toString(),
    });
  }
};
