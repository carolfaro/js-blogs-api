const express = require('express');

const authController = require('../controller/authController');

const router = express.Router();

router.route('/')
.post(authController.authLogin);

module.exports = router;