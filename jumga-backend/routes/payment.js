const express = require("express");
const router = express.Router();
const paymentCtrl = require("../controllers/paymentcontroller");

router.post("/fx", paymentCtrl.covertfx);

module.exports = router;
