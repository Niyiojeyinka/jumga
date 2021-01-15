const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = async (req, res, next) => {
  try {
    const merchant = await db.Merchant.findOne({
      where: {
        UserId: req.body.userId,
      },
    });
    if (merchant.status == "active") {
      next();
    } else if (merchant.status == "pending") {
      throw new Error("Please activate your merchant account");
    } else {
      throw new Error("Account Suspended");
    }
  } catch (e) {
    res.status(401).json({
      result: 0,
      error: e.toString(),
    });
  }
};
