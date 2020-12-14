const https = require("https"); //serve pra fazer requisições para apis externas
const { getAll } = require("../models/Book");
const BookModel = require("../models/Book");
const googleApi = "https://www.googleapis.com/books/v1/volumes?q=";

module.exports = {
  async create(req, res) {
    try {
      const book = req.body;
      // using google api to get book informations (description, cover, etc)
      const formattedTitle = book.title.replace(/[^\w\s]/gi, '');
      https.get(googleApi + formattedTitle, (response) => {
        let body = "";

        response.on("data", (chunk) => {
          body += chunk;
        });

        try {
          response.on("end", async () => {
            body = JSON.parse(body);
            let google_image_path = "";
            let google_description = "";
            let google_author = "";
            let i = 0;
            while (!google_image_path || !google_description) {
              google_image_path =
                body.items[i].volumeInfo.imageLinks &&
                body.items[i].volumeInfo.imageLinks.thumbnail;
              google_description =
                body.items[i].volumeInfo &&
                body.items[i].volumeInfo.description;
              google_author =
                body.items[i].volumeInfo &&
                body.items[i].volumeInfo.authors[0];
              i++;
            }
            // if user didn't send, we'll get from google api
            book.image_path = book.image_path
              ? book.image_path
              : google_image_path;
            book.description = book.description
              ? book.description
              : google_description;
            book.author =
              book.author == "unknown" ? google_author : book.author;
            BookModel.create(book);
            return res.status(200).json({ message: "Book created successfully" });
          });
        } catch (err) {
          console.warn(err);
          // return res.status(500).json({ message: "Internal server error while creating book" });
        }
      });
    } catch (err) {
      console.warn(`Failed on creating book: ${err}`);

      return res.status(500).json({
        message: "Internal server error while creating book",
      });
    }
  },
  async getAll(req, res){
    try {
      const result = await BookModel.getAll();
      if (!result)
        return res.status(404).json({
          message: "Failed on getting books: books not found",
        });
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on getting books: ${err}`);

      return res.status(500).json({
        message: "Internal error while getting books",
      });
    }
  },
  async getById(req, res) {
    try {
      const { book_id } = req.params;

      const result = await BookModel.getById(book_id);
      if (!result)
        return res.status(404).json({
          message: "Failed on getting book: book not found",
        });
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
      if (!result)
        return res.status(404).json({
          message: "Failed on getting book: book not found",
        });
      return res.status(200).json({ message: "Book updated successfully" });
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
      if (!result)
        return res.status(404).json({
          message: "Failed on getting book: book not found",
        });
      return res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
      console.warn(`Failed on deleting book: ${err}`);

      return res.status(500).json({
        message: "Internal server error while deleting book",
      });
    }
  },
};
