const { update, delete } = require("../database/connection");
const connection = require("../database/connection");

module.exports = {
  async create(wish) {
    const result = await connection("wish").insert(wish);
    return result;
  },
  async getById(wish_id) {
    const result = await connection("wish")
      .where({ wish_id })
      .select("*")
      .first();
    return result;
  },
  async updateById(wish_id, wish) {
    const result = await connection("wish").where({ wish_id }).update(wish);
    return result;
  },
  async deleteById(wish_id) {
    const result = await connection("wish").where({ wish_id }).delete();
    return result;
  },
};
