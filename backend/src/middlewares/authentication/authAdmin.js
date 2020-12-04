const jwt = require("jsonwebtoken");


module.exports = {
  async authenticateToken(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const isAdmin = req.headers.admin;
      // 'BEARER token'
      const token = authHeader && authHeader.split(" ")[1];

      if (token == null)
        return res
          .status(401)
          .json({ message: "Failed authentication: no authentication token" });

      try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        if (decoded.admin != 1)
        return res
          .status(401)
          .json({ message: "Failed authentication: user id not an admin" });

        req.headers.user_id = decoded.user_id;
        next();
        
      } catch (err) {
        return res.status(403).json({
          message: "Failed authentication: invalid token"
        });
      }
    } catch (err) {
      console.warn(err);
      return res.status(500).json({
        message: "Internal server error while validating user",
      });
    }
  },
};
