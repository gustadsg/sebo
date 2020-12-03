const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/User');
const BookController = require('./controllers/Book');

// User
routes.post('/users', UserController.create);
routes.get('/users/:user_id', UserController.getById);
routes.put('/users/:user_id', UserController.updateById);
routes.delete('/users/:user_id', UserController.deleteById);

// Book
routes.post('/books', BookController.create);
routes.get('/books/:book_id', BookController.getById);
routes.put('/books/:book_id', BookController.updateById);
routes.delete('/books/:book_id', BookController.deleteById);




module.exports = routes;