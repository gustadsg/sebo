const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/User");
const BookController = require("./controllers/Book");
const WishlistController = require("./controllers/Wishlist");
const LoginController = require("./controllers/Login");

const UserValidator = require("./middlewares/validators/User");
const BookValidator = require("./middlewares/validators/Book");
const WishlistValidator = require("./middlewares/validators/Wishlist");

const Authentication = require("./middlewares/authentication/auth");

// Login
routes.post("/login", LoginController.login);

// User
routes.post("/users", UserValidator.create, UserController.create);
routes.get("/users/:user_id", UserValidator.getById, UserController.getById);
routes.put(
  "/users/:user_id",
  Authentication.authenticateToken,
  UserValidator.updateById,
  UserController.updateById
);
routes.delete(
  "/users/:user_id",
  UserValidator.deleteById,
  UserController.deleteById
);

// Book
routes.post("/books", BookValidator.create, BookController.create);
routes.get("/books/:book_id", BookValidator.getById, BookController.getById);
routes.put(
  "/books/:book_id",
  BookValidator.updateById,
  BookController.updateById
);
routes.delete(
  "/books/:book_id",
  BookValidator.deleteById,
  BookController.deleteById
);

// Wishlist
routes.post(
  "/wishlist/user/:user_id",
  WishlistValidator.create,
  WishlistController.create
);
routes.get(
  "/wish/:wish_id",
  WishlistValidator.getById,
  WishlistController.getById
);
routes.get(
  "/wishlist/user/:user_id",
  WishlistValidator.getByUserId,
  WishlistController.getByUserId
);
routes.get(
  "/wishlist/book/:book_id",
  WishlistValidator.getByBookId,
  WishlistController.getByBookId
);
// routes.put('/wish/:wish_id', BookController.updateById);
routes.delete(
  "/wish/:wish_id",
  WishlistValidator.deleteById,
  WishlistController.deleteById
);

module.exports = routes;
