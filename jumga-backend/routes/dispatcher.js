const express = require("express");
const router = express.Router();
const merchantCtrl = require("../controllers/merchantcontroller");
const auth = require("../middlewares/auth");
const utc = require("../middlewares/usertypecheck");
const cip = require("../middlewares/checkmerchantpaid");

router.get("/all", merchantCtrl.getDispachers);
router.post("/set", merchantCtrl.setDispatcher);
module.exports = router;
