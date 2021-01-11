const express = require("express");
const authCtrl = require("../controllers/authcontroller");
const router = express.Router();

router.post("/create", authCtrl.register);
router.post("/signin", authCtrl.login);

module.exports = router;
