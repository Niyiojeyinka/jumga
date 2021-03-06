const db = require("../models");
const mail = require("../helpers/mail");
const extrequest = require("../helpers/externalrequest");

/** initiate  payment
 *
 * @param {*} req
 * @param {*} res
 */
exports.prepayment = async (req, res) => {
  try {
    const payment = await db.Payment.create({
      status: "pending",
      type: req.body.type,
      PayerId: req.body.userId,
      payer_type: req.body.userType,
      ref: req.body.ref,
      amount: parseFloat(req.body.amount),
      pre_conv_amount: parseFloat(req.body.pre_conv_amount),
    });
    if (payment) {
      return res.status(201).json({
        result: 1,
        error: [],
        message: "Payment initated",
        data: { payment: { id: payment.id, ref: payment.ref } },
      });
    } else {
      throw new Error("Error occured");
    }
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};
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
/** manually confirm payment with transaction
 *
 * @param {*} req
 * @param {*} res
 */
exports.confirmPayment = async (req, res) => {
  try {
    const response = await extrequest.request(
      `https://api.flutterwave.com/v3/transactions/${req.body.transaction_id}/verify`,
      "GET",
      {},
      process.env.FLW_SECRET_KEY
    );

    if (
      response.body.data.status &&
      response.body.data.status === "successful"
    ) {
      //confirm amount and currency
      //give value

      const payment = await db.Payment.findOne({
        where: {
          ref: req.body.ref,
        },
      });
      const user = await db.User.findOne({
        where: {
          id: payment.PayerId,
        },
      });

      const country = await db.Country.findOne({
        where: {
          shortcode: user.country_code,
        },
      });
      //prev always usd new is users country's currency

      const fxresponse = await extrequest.request(
        `https://api.flutterwave.com/v3/rates?from=USD&to=${country.currency}&amount=${payment.pre_conv_amount}
`,
        "GET",
        {},
        process.env.FLW_SECRET_KEY
      );

      let convertedAmount = fxresponse.body.data.to.amount;

      if (convertedAmount <= response.body.data.amount) {
        if (payment.type == "activation") {
          //activate user's merchant account
          await db.Merchant.update(
            {
              status: "active",
            },
            {
              where: {
                UserId: user.id,
              },
            }
          );

          //send mail and return response
        } else if (payment.type == "deposit") {
          const account = await db.Account.findOne({
            where: {
              UserId: user.id,
            },
          });
          //account bal + amount paid in dollar
          let newAccountBal = account.account_bal + payment.pre_conv_amount;
          await db.Account.update(
            {
              account_bal: newAccountBal,
            },
            {
              where: {
                UserId: user.id,
              },
            }
          );
        }
      } else {
        throw new Error("Over valued amount detected");
      }
      return res.status(200).json({
        result: 1,
        error: [],
        message: "Payment was successful",
        data: {},
      });
    } else {
      throw new Error("Error occurred ,please contact our customer care");
    }
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};

/** get banks
 *
 * @param {*} req
 * @param {*} res
 */
exports.getBanks = async (req, res) => {
  try {
    const response = await extrequest.request(
      `https://api.flutterwave.com/v3/banks/${req.body.country_code.toUpperCase()}`,
      "GET",
      {},
      process.env.FLW_SECRET_KEY
    );
    let resArray = response.body.status === "success" ? response.body.data : [];

    return res.status(200).json({
      result: 1,
      error: [],
      message: "Retrieved banks successfully",
      data: resArray,
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};

/** submit user bank
 *
 * @param {*} req
 * @param {*} res
 */
exports.submitBank = async (req, res) => {
  try {
    //get user input
    //send to flutterwave
    const user = await db.User.findOne({
      where: {
        id: req.body.userId,
      },
    });
    const data = {
      account_bank: req.body.bank_no,
      account_number: req.body.account_no,
      business_name: user.name,
      country: user.country_code.toUpperCase(),
      business_email: user.email,
      business_mobile: user.mobilephone,
      split_type: "percentage",
      split_value: 0.5,
    };
    //split setting here iis just the default
    const response = await extrequest.request(
      `https://api.flutterwave.com/v3/subaccounts`,
      "POST",
      data,
      process.env.FLW_SECRET_KEY
    );

    await db.Withdrawalsetting.create({
      bank_code: req.body.bank_no,
      account_no: req.body.account_no,
      PayeeId: user.id,
      payee_type: user.role,
    });
    if (response.body.status == "success") {
      if (user.role === "merchant") {
        await db.Merchant.update(
          {
            subAccountId: response.body.data.subaccount_id,
          },
          {
            where: {
              UserId: user.id,
            },
          }
        );
      } else {
        await db.Dispatcher.update(
          {
            subAccountId: response.body.data.subaccount_id,
          },
          {
            where: {
              UserId: user.id,
            },
          }
        );
      }
    } else {
      throw new Error(response.body.message);
    }
    return res.status(200).json({
      result: 1,
      error: [],
      message: "submited subaccount successfully",
      data: {},
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};
