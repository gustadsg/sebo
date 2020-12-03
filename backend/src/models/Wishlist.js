const connection = require("../database/connection");

module.exports = {
  async create(wish) {
    const result = await connection("wishlist").insert(wish);
    return result;
  },
  async getById(wish_id) {
    const result = await connection("wishlist")
      .where({ wish_id })
      .select("*")
      .first();
    return result;
  },
  // list of wishes of a user
  async getByUserId(user_id) {
    const result = await connection("wishlist").where({ user_id }).select("*");
    return result;
  },
  // list of users who wish a book
  async getByBookId(book_id) {
    const result = await connection("wishlist").where({ book_id }).select("*");
    return result;
  },
  /* Two reasons to comment:
  1.doesn't make much sense to update a wish;
  2. its not working properly */
  // async updateById(wish_id, wish) {
  //   const result = await connection("wishlist").where({ wish_id }).update(wish);
  //   return result;
  // },
  async deleteById(wish_id) {
    const result = await connection("wishlist").where({ wish_id }).delete();
    return result;
  },
};
