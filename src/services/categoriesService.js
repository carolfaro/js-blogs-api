const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
    const user = await Category.create({
    name,
    });
    return user;
 };

 module.exports = { createCategory };