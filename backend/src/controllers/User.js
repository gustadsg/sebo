const { create } = require("domain");
const { update, delete } = require("../database/connection");
const UserModel = require("../models/User");

const crypto = require("crypto");
const { updateById, deleteById } = require("../models/User");

module.exports = {
  async create(req, res) {
    try {
      const user = req.body;
      const hash = crypto.createHash("sha256").digest("hex").toString();
      user.password = hash;

      const result = await UserModel.create(user);
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on creating user: ${err}`);
      return res.status(500).json({
        message: "internal server error while creating user",
      });
    }
  },
  async getById(req, res) {
    try {
      const { user_id } = req.params;

      const result = await UserModel.getById(user_id);
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
      const { user_id } = req.params;
      const user = req.body;

      const result = await UserModel.updateById(user_id, user);
      return res.status(200).json(result);
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

      const result = await UserModel.deleteById(user_id);
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on deleting user: ${err}`);
      return res.status(500).json({
        message: "internal server error while deleting user",
      });
    }
  },
};
