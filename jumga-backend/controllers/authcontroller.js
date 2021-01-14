const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const mail = require("../helpers/mail");

/** Register new user e.g merchant,dispatcher ,customer and admin
 * @param {input} fullname
 * @param {input} country_code
 * @param {input} email
 * @param {input} password
 * @param {input} usertype

 */
exports.register = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      throw new Error("User with this Email Already Exists");
    }
    bcrypt
      .hash(req.body.password, 10)
      .then(async (hash) => {
        const user = await db.User.create({
          name: req.body.name,
          country_code: req.body.country_code,
          email: req.body.email,
          password: hash,
          role: req.body.user_type,
        });
        if (req.body.user_type.toLowerCase() == "admin") {
          throw new Error("Error Invalid User Type");
        }
        switch (req.body.user_type) {
          case "merchant":
            const merchant = await db.Merchant.create({
              UserId: user.id,
            });
            break;
          case "dispatcher":
            const dispatcher = await db.Dispatcher.create({
              UserId: user.id,
            });
            break;
          default:
            const customer = await db.Customer.create({
              UserId: user.id,
            });
            break;
        }
        return res.status(201).json({
          result: 1,
          error: [],
          message: "Registered Successfuly",
          data: [],
        });
      })
      .catch((e) => {
        throw e;
      });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};

/** sign in user e.g merchant,dispatcher ,customer and admin
 * @param {input} email
 * @param {input} password
 *@param {input} usertype

 */
exports.login = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) {
      throw new Error("Incorrec Password");
    } else {
      const token = jwt.sign({ userId: user.id }, "RANDOM_KEY", {
        expiresIn: "24h",
      });
      return res.status(200).json({
        result: 1,
        message: "Signed in Successfuly",
        data: {
          userId: user.id,
          token: token,
        },
        error: [],
      });
    }
  } catch (e) {
    return res.status(401).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};

/** request password recovery  token e.g merchant,dispatcher ,customer and admin
 * @param {input} email
 * @param {input} url
 */
exports.requestToken = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    //create token
    const token = md5(new Date());

    //save token
    db.User.update(
      { token: token },
      {
        where: {
          email: req.body.email,
        },
      }
    );
    //send token
    mail.sendMail(
      req.body.email,

      {
        name: user.name,
        title: "JUMGA Password Recovery",
        url: req.body.url + "/" + token,
      },
      "requesttoken",
      function (error, resp) {
        if (error) {
          // console.log(await error);
          void 0;
        } else {
          //console.log(await resp.response);
          void 0;
        }
      }
    );
    return res.status(200).json({
      result: 1,
      message: "Recovery Email Sent",
      data: {},
      error: [],
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};

/** change password e.g merchant,dispatcher ,customer and admin
 * @param {url} token
 * @param {input}  password  new password
 */
exports.changepassword = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        token: req.body.token,
      },
    });

    if (!user) {
      throw new Error("Token now not valid");
    }

    bcrypt.hash(req.body.password, 10).then(async (hash) => {
      //save token
      await db.User.update(
        {
          password: hash,
          token: null,
        },
        {
          where: {
            id: user.id,
          },
        }
      );
    });

    /* //send token
    mail.sendMail(
      req.body.email,

      {
        name: user.name,
        title: "JUMGA Password Recovery",
        url: req.body.url + "/" + token,
      },
      "requesttoken",
      function (error, resp) {
        if (error) {
          // console.log(await error);
          void 0;
        } else {
          //console.log(await resp.response);
          void 0;
        }
      }
    );*/
    return res.status(200).json({
      result: 1,
      error: [],
      message: "Password updated successfully",
      data: [],
    });
  } catch (e) {
    return res.status(400).json({
      result: 0,
      error: e,
      data: [],
    });
  }
};
