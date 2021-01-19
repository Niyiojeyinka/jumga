const express = require("express");
const router = express.Router();
const paymentCtrl = require("../controllers/paymentcontroller");

router.post("/fx", paymentCtrl.covertfx);
router.post("/record/pre", paymentCtrl.prepayment);
router.post("/confirm", paymentCtrl.confirmPayment);
router.post("/banks", paymentCtrl.getBanks);
router.post("/submit/bank", paymentCtrl.submitBank);

module.exports = router;
