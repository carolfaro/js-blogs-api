const authService = require('../services/authService');

const authLogin = async (req, res) => {
    const token = await authService.authenticate(req.body);
    res.status(201).json(token);
};

module.exports = { authLogin };