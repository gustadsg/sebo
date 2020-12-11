const jwt = require("jsonwebtoken");

module.exports = {
  async verify(req, res) {
    try {
      const { authorization, admin, userId } = req.headers;
      return res
        .status(200)
        .json({ accessToken: authorization.split(" ")[1], validToken: true, userAdmin: admin, userId});
    } catch (err) {
      console.warn(err);
      return res.status(500).json({
        message: "Internal server error while validating token",
      });
    }
  },
};
