const express = require("express");
const router = express.Router();

router.post("/", () => {
  return "data";
});

module.exports = router;
