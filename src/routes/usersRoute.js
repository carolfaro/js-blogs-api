const express = require('express');

const usersController = require('../controller/usersController');
const usersValidation = require('../middlewares/usersValidation');

const router = express.Router();

router.route('/')
.post(usersValidation.validateUserMiddleware, 
    usersValidation.validateUserByEmail,
    usersController.createUsers);

module.exports = router;