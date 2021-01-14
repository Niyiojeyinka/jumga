exports.truncate = (tableName, sequelize) => {
  sequelize.transaction(function (t) {
    var options = { raw: true, transaction: t };
    sequelize
      .query("SET FOREIGN_KEY_CHECKS = 0", null, options)
      .then(function () {
        return sequelize.query("truncate table " + tableName, null, options);
      })
      .then(function () {
        return sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null, options);
      })
      .then(function () {
        return t.commit();
      });
  });
};

exports.login = async (request, app, userType = "customer") => {
  await request(app).post("/api/auth/create").send({
    name: "john doe",
    country_code: "ng",
    user_type: userType,
    email: "test1@gmail.com",
    password: "test1234",
  });
  const response = await request(app).post("/api/auth/signin").send({
    email: "test1@gmail.com",
    password: "test1234",
  });

  return response.body;
};

/** send request that require login
 *
 * @param {*} request request
 * @param {*} app app object
 * @param {*} url endpoint
 * @param {*} response object
 * @param {*} payload payload object
 */
exports.authrequest = async (request, app, url, response, payload) => {
  return await request(app)
    .post(url)
    .set(`authorization`, `Bearer ${response.data.token}`)
    .send({
      userId: response.data.userId,
      ...payload,
    });
};
/** returns the data example as flutterwave webhook will return
 *
 * @param {*} type options successfultransfer,failedtransfer,successfulpayment
 */
exports.flwWebhookPayload = (type = "successfultransfer") => {
  if (type == "successfultransfer") {
    return {
      event: "transfer.completed",
      "event.type": "Transfer",
      data: {
        id: 33286,
        account_number: "0690000033",
        bank_name: "ACCESS BANK NIGERIA",
        bank_code: "044",
        fullname: "Bale Gary",
        created_at: "2020-04-14T16:39:17.000Z",
        currency: "NGN",
        debit_currency: "NGN",
        amount: 30020,
        fee: 26.875,
        status: "SUCCESSFUL",
        reference: "a0a827b1eca65311_PMCKDU_5",
        meta: null,
        narration: "lolololo",
        approver: null,
        complete_message: "Successful",
        requires_approval: 0,
        is_approved: 1,
      },
    };
  } else if (type == "failedtransfer") {
    return {
      event: "transfer.completed",
      "event.type": "Transfer",
      data: {
        id: 2207648,
        account_number: "0731702***",
        bank_name: "ACCESS BANK NIGERIA",
        bank_code: "044",
        fullname: "Yemi Desola",
        created_at: "2020-07-06T21:49:02.000Z",
        currency: "NGN",
        debit_currency: "NGN",
        amount: 5000000000,
        fee: 53.75,
        status: "FAILED",
        reference: "a0a827b1eca65311_PMCKDU_5",
        meta: null,
        narration: "ionnodo",
        approver: null,
        complete_message:
          "DISBURSE FAILED: You can only spend NGN 1000000.00 at once",
        requires_approval: 0,
        is_approved: 1,
      },
    };
  } else if (type == "successfulpayment") {
    return {
      event: "charge.completed",
      data: {
        id: 285959875,
        tx_ref: "Links-616626414629",
        flw_ref: "PeterEkene/FLW270177170",
        device_fingerprint: "a42937f4a73ce8bb8b8df14e63a2df31",
        amount: 100,
        currency: "NGN",
        charged_amount: 100,
        app_fee: 1.4,
        merchant_fee: 0,
        processor_response: "Approved by Financial Institution",
        auth_model: "PIN",
        ip: "197.210.64.96",
        narration: "CARD Transaction ",
        status: "successful",
        payment_type: "card",
        created_at: "2020-07-06T19:17:04.000Z",
        account_id: 17321,
        customer: {
          id: 215604089,
          name: "Yemi Desola",
          phone_number: null,
          email: "user@gmail.com",
          created_at: "2020-07-06T19:17:04.000Z",
        },
        card: {
          first_6digits: "123456",
          last_4digits: "7889",
          issuer: "VERVE FIRST CITY MONUMENT BANK PLC",
          country: "NG",
          type: "VERVE",
          expiry: "02/23",
        },
      },
    };
  }
};
