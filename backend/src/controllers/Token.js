const jwt = require("jsonwebtoken");

module.exports = {
  async verify(req, res) {
    try {
      const { accessToken, admin, user_id } = req.headers;
      return res.status(200).json({ accessToken, validToken: true, admin, user_id});
    } catch (err) {
      console.warn(err);
      return res.status(400).json({
        validToken: false
      });
    }
  },
};
