const express = require("express");
const router = express.Router();
const merchantCtrl = require("../controllers/merchantcontroller");
const auth = require("../middlewares/auth");
const utc = require("../middlewares/usertypecheck");
const cip = require("../middlewares/checkmerchantpaid");
router.post(
  "/check/account/activation",
  auth,
  merchantCtrl.getMerchantActivationStatus
);
router.post("/confirm/user/type", utc, merchantCtrl.confirmUserType);
module.exports = router;
