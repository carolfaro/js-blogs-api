const express = require('express');
const usersValidation = require('../middlewares/usersValidation');
const categoriesController = require('../controller/categoriesController');

const router = express.Router();

router.route('/')
.post(usersValidation.authUsers, categoriesController.createCategory)
.get(usersValidation.authUsers, categoriesController.getAllCategories);

module.exports = router;