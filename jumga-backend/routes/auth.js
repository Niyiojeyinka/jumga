const express = require("express");
const authCtrl = require("../controllers/authcontroller");
const router = express.Router();

router.post("/create", authCtrl.register);
router.post("/signin", authCtrl.login);
router.post("/requesttoken", authCtrl.requestToken);
router.post("/changepassword", authCtrl.changepassword);

module.exports = router;
