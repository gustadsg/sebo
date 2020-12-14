const jwt = require("jsonwebtoken");

module.exports = {
  async verify(req, res) {
    try {
      const {authorization} = req.headers;
      // BEARER token
      const token = authorization.split(' ')[1];
      if(!token) return res.status(200).json({validToken: false});

      try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return res.status(200).json({validToken: true, userId: decoded.user_id, userName: decoded.name, userAdmin: decoded.admin})

      } catch (error) {
        return res.status(200).json({validToken: false, message: 'Invalid or expired token'})
      }
    } catch (err) {
      return res.status(200).json({message: 'Internal server error while validating token'})
    }
  }
};
