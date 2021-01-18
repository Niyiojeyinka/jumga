const db = require("../models");

exports.addProduct = async (req, res) => {
  try {
    const product = await db.Product.create({
      name: req.body.name,
      description: req.body.description,
      MerchantId: req.body.merchant_id,
      CategoryId: req.body.category_id,
      in_stock: req.body.in_stock,
      price: req.body.price,
      sku: req.body.sku ? req.body.sku : null,
      color: req.body.color ? req.body.color : null,
      weight: req.body.weight ? req.body.weight : null,
      model: req.body.model ? req.body.model : null,
      status: req.body.status,
    });

    return res.status(201).json({
      result: 1,
      error: [],
      message: "Product created Successfuly",
      data: { product },
    });
  } catch (e) {
    console.log(e.toString());
    return res.status(400).json({
      result: 0,
      error: e.toString(),
      data: [],
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await db.Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        MerchantId: req.body.merchant_id,
        CategoryId: req.body.category_id,
        in_stock: req.body.in_stock,
        price: req.body.price,
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.status(200).json({
      result: 1,
      error: [],
      message: "Product Updated Successfuly",
      data: { product },
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    await db.Product.destroy({
      id: req.params.id,
    });

    return res.status(200).json({
      result: 1,
      error: [],
      message: "Product Deleted Successfuly",
      data: {},
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const product = await db.Product.findOne({
      where: {
        id: parseInt(req.params.id),
      },
      include: [
        "images",
        {
          model: db.User,
          as: "merchant",
          attributes: { exclude: ["password"] },
        },
      ],
    });

    return res.status(200).json({
      result: 1,
      error: [],
      message: "Product retrieved Successfuly",
      data: { product },
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};

exports.getRecentProduct = async (req, res) => {
  try {
    //req.params.limit req.params.offset

    const products = await db.Product.findAll({
      limit: parseInt(req.params.limit),
      offset: req.params.offset ? parseInt(req.params.offset) : 0,
      order: [["id", "DESC"]],
      include: [
        "images",
        {
          model: db.User,
          as: "merchant",
          attributes: { exclude: ["password"] },
        },
      ],
    });

    return res.status(200).json({
      result: 1,
      error: [],
      message: "Recent Products retrieved Successfuly",
      data: { products },
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const category = await db.Category.findOne({
      where: { slug: req.params.category },
    });

    const products = await db.Product.findAll({
      where: {
        CategoryId: category.id,
      },
      limit: parseInt(req.params.limit),
      offset: req.params.offset ? parseInt(req.params.offset) : 0,
      order: [["id", "DESC"]],
      include: [
        "images",
        {
          model: db.User,
          as: "merchant",
          attributes: { exclude: ["password"] },
        },
      ],
    });
    return res.status(200).json({
      result: 1,
      error: [],
      message: "Category Products retrieved Successfuly",
      data: { products },
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};
