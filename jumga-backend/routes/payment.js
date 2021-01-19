const express = require("express");
const router = express.Router();
const paymentCtrl = require("../controllers/paymentcontroller");

router.post("/fx", paymentCtrl.covertfx);
router.post("/record/pre", paymentCtrl.prepayment);
router.post("/confirm", paymentCtrl.confirmPayment);

module.exports = router;
