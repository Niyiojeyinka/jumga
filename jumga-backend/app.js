const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/auth");
const pageRoute = require("./routes/page");
const productRoute = require("./routes/products");
const path = require("path");
const db = require("./models");
const useCor = require("./middlewares/cors");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
});
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api/page/", useCor, pageRoute);
app.use("/api/auth/", useCor, authRoute);
app.use("/api/products/", useCor, productRoute);

module.exports = app;
