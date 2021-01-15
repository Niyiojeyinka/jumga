const request = require("supertest");
const app = require("../app");
const db = require("../models");
const expect = require("chai").expect;
const testhelper = require("../tests/helper");
beforeEach(function (done) {
  setTimeout(function () {
    done();
  }, 500);
});
describe("Withdrawal Test", () => {
  it("Withdrawal setting can be added", async () => {
    const loginResponse = await testhelper.login(request, app, "merchant");

    console.log("here", loginResponse);
    const response = await request(app).post("/api/withdrawal/settings").send({
      bank_code: "454",
      account_no: "98765432123456789",
      payeeid: loginResponse.data.userId,
      payee_type: "merchant",
    });

    expect(response.status).to.be.equal(201);
  });

  it("Withdrawal can be intiated with valid account balance", async () => {
    const loginResponse = await testhelper.login(request, app, "merchant");

    await db.Account.create({
      UserId: loginResponse.data.userId,
      account_bal: 5600.0,
      total_earned: 0.0,
    });
    //withdraw 5000 make sure 600 remain as acct bal

    const response = await request(app).post("/api/withdrawal/withdraw").send({
      userId: loginResponse.data.userId,
      amount: 5000,
      userType: "merchant",
      ref: "a0a827b1eca65311_PMCKDU_5",
    });

    expect(response.status).to.be.equal(200);
  });

  //assert person with less bal cant widthraw
  it("Withdrawal can't be intiated with invalid account balance", async () => {
    const loginResponse = await testhelper.login(request, app, "merchant");

    await db.Account.create({
      UserId: loginResponse.data.userId,
      account_bal: 56.0,
      total_earned: 0.0,
    });
    //withdraw 5000 make sure 600 remain as acct bal

    const response = await request(app).post("/api/withdrawal/withdraw").send({
      userId: loginResponse.data.userId,
      amount: 5000,
      userType: "merchant",
      ref: "a0a827b1eca65311_PMCKDU_5",
    });

    expect(response.status).to.be.equal(400);
  });

  it("flutterwave transfer webhook can update successful transaction status", async () => {
    const response = await request(app)
      .post("/api/webhook")
      .set("verif-hash", process.env.MY_FLW_HASH)
      .send(testhelper.flwWebhookPayload("successfultransfer"));
    const withdrawal = await db.Withdrawal.findOne({
      where: {
        ref: "a0a827b1eca65311_PMCKDU_5",
      },
    });
    expect(response.status).to.be.equal(200);
    expect(withdrawal.status).to.equal("successful");
  });

  it("flutterwave transfer webhook can update failed transaction status", async () => {
    const response = await request(app)
      .post("/api/webhook")
      .set("verif-hash", process.env.MY_FLW_HASH)
      .send(testhelper.flwWebhookPayload("failedtransfer"));
    const withdrawal = await db.Withdrawal.findOne({
      where: {
        ref: "a0a827b1eca65311_PMCKDU_5",
      },
    });
    expect(response.status).to.be.equal(200);
    expect(withdrawal.status).to.equal("successful");
  });
});

after(() => {
  testhelper.truncate("Users", db.sequelize);
  testhelper.truncate("Merchants", db.sequelize);
  testhelper.truncate("Withdrawalsettings", db.sequelize);
  testhelper.truncate("Withdrawals", db.sequelize);
});
