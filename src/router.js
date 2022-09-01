const express = require('express');

const authController = require('./controller/authController');

const routers = express.Router();

routers.use('/login', authController);

module.exports = routers;
