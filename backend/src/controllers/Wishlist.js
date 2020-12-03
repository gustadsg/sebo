const https = require("https");
const WishlistModel = require("../models/Wishlist");

module.exports = {
  async create(req, res) {
    try {
      const wish = req.body; //pega o desejo do corpo da requisição
      const {user_id} = req.params; //pega o id do usuario pela url
      wish.user_id = user_id; //completa o desejo com o o id do usuario

      const result = await WishlistModel.create(wish); //usa o model da wishlist para criar um desejo
      return res.status(200).json(result); //fala que tá tudo certo pro navegador
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
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on getting wishlist: ${err}`);

      return res.status(500).json({
        message: "Internal error while getting wishlist",
      });
    }
  },
//   reasons for this to be commented on models/wishlist
//   async updateById(req, res) {
//     try {
//       const { wish_id } = req.params;
//       const wish = req.body;
//       wish.user_id = 'nada';

//       const result = await WishlistModel.updateById(wish_id, wish);
//       return res.status(200).json(result);
//     } catch (err) {
//       console.warn(`Failed on updating wishlist: ${err}`);

//       return res.status(500).json({
//         message: "Internal server error while updating wishlist",
//       });
//     }
//   },

  async deleteById(req, res) {
    try {
      const { wish_id } = req.params;

      const result = await WishlistModel.deleteById(wish_id);
      return res.status(200).json(result);
    } catch (err) {
      console.warn(`Failed on deleting wish from wishlist: ${err}`);

      return res.status(500).json({
        message: "Internal server error while deleting wish from wishlist",
      });
    }
  },
};
