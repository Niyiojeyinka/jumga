const db = require("../models");
const md5 = require("md5");
const mail = require("../helpers/mail");

/** get merchant payment status
 *
 * @param {*} req
 * @param {*} res
 */
exports.getMerchantActivationStatus = async (req, res) => {
  try {
    const merchant = await db.Merchant.findOne({
      where: {
        UserId: req.body.userId,
      },
    });

    return res.status(200).json({
      result: 1,
      message: "Status retrieved",
      data: {
        status: merchant.status,
      },
      error: [],
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};

exports.confirmUserType = (req, res) => {
  //if it can reach here,and not
  //blocked by middlewares then its okay
  return res.status(200).json({
    result: 1,
    message: "confirmed",
    data: {},
    error: [],
  });
};

exports.getDispachers = async (req, res) => {
  const dispatchers = await db.User.findAll({
    where: {
      role: "dispatcher",
    },
    attributes: ["name", "email"],
  });

  return res.status(200).json({
    result: 1,
    message: "confirmed",
    data: dispatchers,
    error: [],
  });
};

exports.setDispatcher = async (req, res) => {
  try {
    const dispatcher = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dispatcher) {
      throw new Error("dispatcher not found");
    }
    await db.Merchant.update(
      {
        dispatcherId: dispatcher.id,
      },
      {
        where: { UserId: req.body.userId },
      }
    );

    return res.status(200).json({
      result: 1,
      message: "dispatcher added",
      data: {},
      error: [],
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};
