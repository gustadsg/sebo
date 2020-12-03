const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/User');

// User
routes.post('/users', UserController.create);
routes.get('/users/:user_id', UserController.getById);
routes.put('/users/:user_id', UserController.updateById);
routes.put('/users/:user_id', UserController.deleteById);


module.exports = routes;