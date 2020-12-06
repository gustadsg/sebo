const https = require("https");
const WishlistModel = require("../models/Wishlist");

module.exports = {
  async create(req, res) {
    try {
      const wish = req.body; //pega o desejo do corpo da requisição
      const { user_id } = req.params; //pega o id do usuario pela url
      wish.user_id = user_id; //completa o desejo com o o id do usuario

      const wishAlreadyExists = await WishlistModel.getByUserAndBookId(
        user_id,
        wish.book_id
      );

      if (wishAlreadyExists)
        return res
          .status(400)
          .json({ message: "Failed creating wish: wish already exists" });

      const result = await WishlistModel.create(wish); //usa o model da wishlist para criar um desejo
      return res.status(200).json({ message: "Wish created successfully" }); //fala que tá tudo certo pro navegador
    } catch (err) {
      console.warn(`Failed on creating wishlist: ${err}`); //imprime o erro no terminal
      //fala que deu erro e mostra o erro (em forma de json) para o navegador
      return res.status(500).json({
        message: "Internal server error while creating wish on wishlist",
      });
    }
  },
  async getById(req, res) {
    try {
      const { wish_id } = req.params;

      const result = await WishlistModel.getById(wish_id);
      if (!result)
        return res.status(404).json({
          message: "Failed on getting wish: wish not found",
        });
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on getting wish from wishlist: ${err}`);

      return res.status(500).json({
        message: "Internal error while getting wish from wishlist",
      });
    }
  },
  async getByUserId(req, res) {
    try {
      const { user_id } = req.params;

      const result = await WishlistModel.getByUserId(user_id);
      if (!result)
        return res.status(404).json({
          message: "Failed on getting wish: wish not found",
        });
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on getting wishlist: ${err}`);

      return res.status(500).json({
        message: "Internal error while getting wishlist",
      });
    }
  },
  async getByBookId(req, res) {
    try {
      const { book_id } = req.params;

      const result = await WishlistModel.getByBookId(book_id);
      if (!result)
        return res.status(404).json({
          message: "Failed on getting wish: wish not found",
        });
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on getting wishlist: ${err}`);

      return res.status(500).json({
        message: "Internal error while getting wishlist",
      });
    }
  },

  async deleteById(req, res) {
    try {
      const { wish_id } = req.params;

      const result = await WishlistModel.deleteById(wish_id);
      if (!result)
        return res.status(404).json({
          message: "Failed on getting wish: wish not found",
        });
      return res.status(200).json({ message: "wish deleted successfully" });
    } catch (err) {
      console.warn(`Failed on deleting wish from wishlist: ${err}`);

      return res.status(500).json({
        message: "Internal server error while deleting wish from wishlist",
      });
    }
  },
};
