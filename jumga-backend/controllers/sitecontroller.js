const db = require("../models");

exports.getCategories = async (req, res) => {
  categories = await db.Category.findAll();
  return res.status(200).json({
    result: 1,
    error: [],
    message: "Categories Retrieved successfuly",
    data: { categories },
  });
};
