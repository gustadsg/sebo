const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/User');
const BookController = require('./controllers/Book');
const WishlistController = require('./controllers/Wishlist');

const UserValidator = require('./middlewares/validators/User')
const BookValidator = require('./middlewares/validators/Book')
const WishlistValidator = require('./middlewares/validators/Wishlist')

// User
routes.post('/users', UserValidator.create ,UserController.create);
routes.get('/users/:user_id', UserController.getById);
// TODO: get by email
routes.put('/users/:user_id', UserController.updateById);
routes.delete('/users/:user_id', UserController.deleteById);

// Book
routes.post('/books', BookController.create);
routes.get('/books/:book_id', BookController.getById);
routes.put('/books/:book_id', BookController.updateById);
routes.delete('/books/:book_id', BookController.deleteById);

// Wishlist
routes.post('/wishlist/user/:user_id', WishlistController.create);
routes.get('/wish/:wish_id', WishlistController.getById);
routes.get('/wishlist/user/:user_id', WishlistController.getByUserId);
routes.get('/wishlist/book/:book_id', WishlistController.getByBookId);
// routes.put('/wish/:wish_id', BookController.updateById);
routes.delete('/wish/:wish_id', WishlistController.deleteById);

module.exports = routes;