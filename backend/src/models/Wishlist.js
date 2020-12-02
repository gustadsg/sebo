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
  // list of wishes of a user
  async getByUserId(user_id) {
    const result = await connection("wish").where({ user_id }).select("*");
    return result;
  },
  // list of users who wish a book
  async getByBookId(book_id) {
    const result = await connection("wish").where({ book_id }).select("*");
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
