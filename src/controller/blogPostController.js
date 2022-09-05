const jwt = require('../utils/jwt');
const postService = require('../services/blogPostService');
const { User } = require('../database/models');

// const { JWT_SECRET } = process.env;

const blogPostController = {

    async createPost(req, res) {
        const token = req.headers.authorization;
        // const { authorization } = req.headers;
        // const result = jwt.verifyToken(authorization);
        // req.userId = result.id;
        const { email } = jwt.verifyToken(token);

    //    console.log(`AQUI CARAOLHOOO ${email}`);

       const { dataValues: { id } } = await User.findOne({ where: { email } });
       console.log(`AQUI CARAOLHOOO ${id}`);
        try {
            const newPost = req.body;
            // console.log(`AQUI CARAOLHOOO ${categories}`);
            const verifyCategories = await postService.findCategories(newPost.categoryIds);

            if (verifyCategories.message) {
                return res.status(400).json(verifyCategories);
            }

            const newBlogPost = await postService.createNewBlogPost(newPost, id);

            return res.status(201).json(newBlogPost);
        } catch (err) {
            return res.status(500).json(err);
        }
    }, 

};

module.exports = blogPostController;
// console.log(`AQUI CARAOLHOOO ${result.id}`);