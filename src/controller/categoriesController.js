const categoriesService = require('../services/categoriesService');

const categoriesController = {

    async createCategory(req, res) {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: '"name" is required' });

        const newCategory = await categoriesService.createCategory({ name });
        return res.status(201).json(newCategory);
    },
};

module.exports = categoriesController;