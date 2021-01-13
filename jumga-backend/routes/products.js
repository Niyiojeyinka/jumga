const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/productcontroller");

router.put("/:id", productCtrl.updateProduct);
router.post("/", productCtrl.addProduct);
router.get("/:id", productCtrl.getProduct);
router.delete("/:id", productCtrl.deleteProduct);
router.get("/recents/:limit/:offset", productCtrl.getRecentProduct);

module.exports = router;
