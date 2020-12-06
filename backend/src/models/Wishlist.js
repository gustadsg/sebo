const connection = require("../database/connection");

module.exports = {
  async create(wish) {
    const result = await connection("wishlist").insert(wish);
    return result;
  },
  async getById(wish_id) {
    const result = await connection("wishlist")
      .where({ wish_id })
      .innerJoin("book", "book.book_id", "wishlist.book_id")
      .innerJoin("user", "user.user_id", "wishlist.user_id")
      .select(
        "wish_id",
        "book.book_id",
        "book.title",
        "book.author",
        "book.image_path",
        "book.description",
        "user.name as user_name",
        "user.user_id"
      )
      .first();
    return result;
  },
  // list of wishes of a user
  async getByUserId(user_id) {
    const filter = { "user.user_id": user_id };

    const result = await connection("wishlist")
      .where(filter)
      .innerJoin("book", "book.book_id", "wishlist.book_id")
      .innerJoin("user", "user.user_id", "wishlist.user_id")
      .select(
        "wish_id",
        "book.book_id",
        "book.title",
        "book.author",
        "book.image_path",
        "book.description",
        "user.name as user_name",
        "user.user_id"
      );
    return result;
  },
  // list of users who wish a book
  async getByBookId(book_id) {
    const filter = { "book.book_id": book_id };

    const result = await connection("wishlist")
      .where(filter)
      .innerJoin("book", "book.book_id", "wishlist.book_id")
      .innerJoin("user", "user.user_id", "wishlist.user_id")
      .select(
        "wish_id",
        "book.book_id",
        "book.title",
        "book.author",
        "book.image_path",
        "book.description",
        "user.name as user_name",
        "user.user_id"
      );
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
