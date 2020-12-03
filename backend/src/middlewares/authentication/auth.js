const jwt = require("jsonwebtoken");

const ACCES_TOKEN_SECRET =
  "6a391c140785dab897b7879837aa0749709de0b89455ef7aa8f44686f0e95b7a51188d6a4ff68a42ac0cbd35006beea39f5c186ef561a406a3ca3526b74d136a";
// i dont thik this is useful for now
const REFRESH_TOKEN_SECRET =
  "13b6df28772943824e20bef5751f195ab5828541276532639f2ab99f80a0c9cfe7075b2254f294ed1d4ad4d23264436675c251264d6df1c3127ea3bc3be81326";

module.exports = {
    async authenticateToken(req,res,next){
        try {
            const authHeader = req.headers.authorization;
            // 'BEARER token'
            const token = authHeader && authHeader.split(" ")[1];
            
        
            if (token == null) return res.status(401).json({message: "Failed logging in: no authentication token"});
        
            jwt.verify(token, ACCES_TOKEN_SECRET, (err, user) => {

              if (err) console.log(err)
              if (err) return res.status(403).json({ message: "Invalid token" });
              req.user = user;
              next();
            });
          } catch (err) {
            console.warn(err);
            return res.status(500).json({
              message: "Internal server error while validating user",
            });
          }
    }
}