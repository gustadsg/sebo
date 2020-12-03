const https = require("https");
const BookModel = require("../models/Book");

module.exports = {
  async create(req, res) {
    try {
      const book = req.body;
      const result = await BookModel.create(book);
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on creating book: ${err}`);

      return res.status(500).json({
        message: "Internal server error while creating book",
      });
    }
  },
  async getById(req, res) {
    try {
      const { book_id } = req.params;

      const result = await BookModel.getById(book_id);
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on getting book: ${err}`);

      return res.status(500).json({
        message: "Internal error while getting book",
      });
    }
  },
  async updateById(req, res) {
    try {
      const { book_id } = req.params;
      const book = req.body;

      const result = await BookModel.updateById(book_id, book);
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on updating book: ${err}`);

      return res.status(500).json({
        message: "Internal server error while updating book",
      });
    }
  },
  async deleteById(req, res) {
    try {
      const { book_id } = req.params;

      const result = await BookModel.deleteById(book_id);
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on deleting book: ${err}`);

      return res.status(500).json({
        message: "Internal server error while deleting book",
      });
    }
  },

};
