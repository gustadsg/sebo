const connection = require("../database/connection");

module.exports = {
  async create(book) {
    const result = await connection("book").insert(book);
    return result;
  },
  async getById(book_id) {
    const result = await connection("book")
      .where({ book_id })
      .select("*")
      .first();
    return result;
  },
  async updateById(book_id, book) {
    const result = await connection("book").where({ book_id }).update(book);
    return result;
  },
  async deleteById(book_id) {
    const result = await connection("book").where({ book_id }).delete();
    return result;
  },
};