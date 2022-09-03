const express = require('express');

const usersController = require('../controller/usersController');
const usersValidation = require('../middlewares/usersValidation');

const router = express.Router();

router.route('/')
.post(usersValidation.validateUserMiddleware, 
    usersValidation.validateUserByEmail,
    usersController.createUsers)
.get(usersValidation.authUsers, 
    usersController.getAllUsers);

router.route('/:id')
.get(usersValidation.authUsers, usersController.getUserById);

module.exports = router;