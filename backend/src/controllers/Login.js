const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

const ACCES_TOKEN_SECRET = '6a391c140785dab897b7879837aa0749709de0b89455ef7aa8f44686f0e95b7a51188d6a4ff68a42ac0cbd35006beea39f5c186ef561a406a3ca3526b74d136a'
// i dont thik this is useful for now
const REFRESH_TOKEN_SECRET = '13b6df28772943824e20bef5751f195ab5828541276532639f2ab99f80a0c9cfe7075b2254f294ed1d4ad4d23264436675c251264d6df1c3127ea3bc3be81326'


module.exports = {
    async login(req, res) {
        try {
            const {email, password} = req.body;

            const salt = crypto.randomBytes(16).toString('hex');
            const hashedPassword = crypto.pbkdf2Sync(password, salt, 20, 40, "sha256").toString('hex');

            const user = UserModel.getByEmail(email);
            if(!user){
                return res.status(400).json({
                    message: "Failed on logging in: no user with such email"
                });
            }
            if(user.password != hashedPassword){
                return res.status(400).json({
                    message: "Failed on logging in: wrong password"
                });
            }

            //if we are here, user must be validated (or shit happened)
            const accessToken = jwt.sign(user, ACCES_TOKEN_SECRET, {expiresIn: 60*60*24});

            return res.status(200).json({
                accessToken: accessToken,
                userId: user.user_id,
                userAdmin: user.admin
            });

        } catch (err) {
            
        }
    }
}