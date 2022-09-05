const { Category, BlogPost, PostCategory, sequelize } = require('../database/models');

const findCategories = async (categoriesId) => {
    const { rows } = await Category.findAndCountAll({
        where: {
            id: categoriesId,
        },
    });

    if (rows.length !== categoriesId.length) {
        return { message: '"categoryIds" not found' };
    }

    return true;
};

const createNewBlogPost = async (postsInfos, userId) => {
    const { title, content } = postsInfos;
    
    const result = await sequelize.transaction(async (transaction) => {
        const newBlogPost = await BlogPost.create(
            { title, content, userId },
            { transaction },
        );

        const newPostId = newBlogPost.dataValues.id;

        const addPostCategories = postsInfos.categoryIds
        .map((categoryId) => ({ postId: newPostId, categoryId }));

        await PostCategory.bulkCreate(
            addPostCategories, 
            { transaction },
            );
            
            return newBlogPost;
    });
    return result;
};

module.exports = {
    findCategories,
    createNewBlogPost,
};