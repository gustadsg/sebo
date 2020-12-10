const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


module.exports = {
  async login(req, res) {
    try {
      const { email, password } = await req.body;
      const user = await UserModel.getByEmail(email);

      // salt is the user email
      const hashedPassword = await crypto
        .pbkdf2Sync(password, process.env.SALT, 20, 40, "sha256")
        .toString("hex");

      if (!user) {
        return res.status(403).json({
          message: "Failed on logging in: no user with such email",
        });
      }
      if (user.password != hashedPassword) {
        return res.status(403).json({
          message: "Failed on logging in: wrong password",
        });
      }

      //if we are here, user must be validated (or shit happened)
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 60 * 60 * 24,
      });

      delete user.password;

      return res.status(200).json({
        accessToken: accessToken,
        userId: user.user_id,
        userAdmin: user.admin,
        userName: user.name
      });
    } catch (err) {
      console.warn(`Failed on logging in: ${err}`);
      return res.status(500).json({
        message: "Internal server error while logging in",
      });
    }
  },
};
