const express = require('express');
const api = express.Router();
const controller = require('./controller');

api.get('/users', controller.getAll);
api.get('/user/:id', controller.getById);

module.exports = api;