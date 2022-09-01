const express = require('express');

const authService = require('../services/authService');

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {
    const token = await authService.authenticate(req.body);
    res.status(201).json(token);
});

module.exports = authRouter;