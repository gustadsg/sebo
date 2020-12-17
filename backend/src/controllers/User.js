const UserModel = require("../models/User");
const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    try {
      const user = req.body;
      const hash = crypto
        .pbkdf2Sync(user.password, process.env.SALT, 20, 40, "sha256")
        .toString("hex");
      user.password = hash;

      if (await UserModel.getByEmail(user.email)) {
        return await res.status(400).json({
          message: "Failed on creating user: Email already registered",
        });
      }
      const result = await UserModel.create(user);
      return res.status(200).json({ message: "User created successfully" });
    } catch (err) {
      console.warn(`Failed on creating user: ${err}`);
      return res.status(500).json({
        message: "Internal server error while creating user",
      });
    }
  },
  async getById(req, res) {
    try {
      const { user_id } = req.params;

      const result = await UserModel.getById(user_id);

      if (!result)
        return res.status(404).json({
          message: "Failed on getting user: user not found",
        });

      // dados sensiveis não devem ser retornados
      delete result.password;

      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on getting user: ${err}`);
      return res.status(500).json({
        message: "internal server error while getting user",
      });
    }
  },
  async updateById(req, res) {
    try {
      const user = req.body;
      const { user_id } = req.params;
      const { admin } = req.headers;
      const looged_user_id = req.headers.user_id

      if(user_id != looged_user_id && admin!=1) return res.status(403).json({message: "Failed on updating user: you can not update another's user information unless you are an admin"});

      const salt = await crypto.randomBytes(16).toString("hex");
      const hashedPassword = await crypto
        .pbkdf2Sync(user.password, process.env.SALT, 20, 40, "sha256")
        .toString("hex");

      user.password = hashedPassword;
      const result = await UserModel.updateById(user_id, user);

      if (!result)
        return res.status(404).json({
          message: "Failed on getting user: user not found",
        });

      return res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
      console.warn(`Failed on updating user: ${err}`);
      return res.status(500).json({
        message: "internal server error while updating user",
      });
    }
  },
  async deleteById(req, res) {
    try {
      const { user_id } = req.params;

      if(user_id != user_id && admin!=1) return res.status(403).json({message: "Failed on deleting user: you can not delete another's user account unless you are an admin"});

      const result = await UserModel.deleteById(user_id);

      if (!result)
        return res.status(404).json({
          message: "Failed on getting user: user not found",
        });

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.warn(`Failed on deleting user: ${err}`);
      return res.status(500).json({
        message: "internal server error while deleting user",
      });
    }
  },
};
