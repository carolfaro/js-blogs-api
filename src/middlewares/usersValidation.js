const { User } = require('../database/models');
const schemasJoi = require('./schemasJoi');

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

module.exports = { validateUserMiddleware, validateUserByEmail };