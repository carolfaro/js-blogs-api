const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const authenticate = async ({ email }) => {
    const findUser = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'password', 'image'],
        where: { email },
    });

    if (!findUser) return false;

    const token = generateJWTToken(findUser.dataValues);

    return { token };
};

module.exports = { authenticate };