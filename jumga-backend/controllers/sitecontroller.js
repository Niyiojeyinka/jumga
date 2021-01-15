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

exports.getSystemvars = async (req, res) => {
  if (req.params.sysvar) {
    const systemvars = {};
    for (var sysvar of JSON.parse(req.body.names)) {
      const systemvar = await db.Systemvars.findOne({
        where: {
          name: sysvar,
        },
      });
      systemvars[systemvar.name] = systemvar.value;
    }
    return res.status(200).json({
      result: 1,
      error: [],
      message: "Systemvars Retrieved successfuly",
      data: { systemvars },
    });
  } else {
    const systemvars = await db.Systemvars.findAll();
    return res.status(200).json({
      result: 1,
      error: [],
      message: "Systemvars Retrieved successfuly",
      data: { systemvars },
    });
  }
};

exports.getSliders = async (req, res) => {
  const sliders = await db.Slider.findAll();
  return res.status(200).json({
    result: 1,
    error: [],
    message: "Sliders Retrieved successfuly",
    data: { sliders },
  });
};

exports.getFrontreviews = async (req, res) => {
  const reviews = await db.Frontreview.findAll();
  return res.status(200).json({
    result: 1,
    error: [],
    message: "Frontreviews Retrieved successfuly",
    data: { reviews },
  });
};
