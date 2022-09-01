const authService = require('../services/authService');

const authLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) { 
        return res.status(400).json({ message: 'Some required fields are missing' }); 
    }
    try {
        const token = await authService.authenticate(req.body);
        if (!token) return res.status(400).json({ message: 'Invalid fields' });
        return res.status(200).json(token);
    } catch (err) {
        next(err);
    }
};

module.exports = { authLogin };