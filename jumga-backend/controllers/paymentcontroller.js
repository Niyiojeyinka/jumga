const db = require("../models");
const md5 = require("md5");
const mail = require("../helpers/mail");
const extrequest = require("../helpers/externalrequest");

/** initiate merchant activation payment
 *
 * @param {*} req
 * @param {*} res
 */
exports.initMerchantActivationPayment = async (req, res) => {};
exports.covertfx = async (req, res) => {
  try {
    const response = await extrequest.request(
      `https://api.flutterwave.com/v3/rates?from=${req.body.from}&to=${req.body.to}&amount=${req.body.amount}
`,
      "GET",
      {},
      process.env.FLW_SECRET_KEY
    );

    if (response.status == 200) {
      return res.status(200).json({
        result: 0,
        error: [],
        data: { to: { amount: response.body.data.to.amount } },
      });
    } else {
      throw new Error("Couldn't Connect to FLW FX endpoint");
    }
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};
