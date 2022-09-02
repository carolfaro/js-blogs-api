const { User } = require('../database/models');
const schemasJoi = require('./schemasJoi');
const jwt = require('../utils/jwt');

const validateUserMiddleware = (req, res, next) => {
    const { error } = schemasJoi.UserSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    next();
};

const validateUserByEmail = async (req, res, next) => {
    const { email } = req.body;
    const findUser = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'password', 'image'],
        where: { email },
    });
    if (findUser) return res.status(409).json({ message: 'User already registered' });
    next();
};

const authUsers = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) return res.status(401).json({ message: 'Token not found' });
        const result = jwt.verifyToken(authorization);
        req.userId = result.id;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { validateUserMiddleware, validateUserByEmail, authUsers };