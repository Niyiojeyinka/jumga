const express = require("express");
const router = express.Router();
const siteCtrl = require("../controllers/sitecontroller");

router.get("/systemvars", siteCtrl.getSystemvars);
router.post("/systemvars/:sysvar", siteCtrl.getSystemvars);
router.get("/sliders", siteCtrl.getSliders);
router.get("/frontreviews", siteCtrl.getFrontreviews);

module.exports = router;
