const express = require('express');
const usersValidation = require('../middlewares/usersValidation');
const blogPostController = require('../controller/blogPostController');
const postValidation = require('../middlewares/postValidation');

const router = express.Router();

router.route('/')
.post(usersValidation.authUsers, 
    postValidation.validatePost,
    blogPostController.createPost);

module.exports = router;
