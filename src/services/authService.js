const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
    if (!email || !password) {
        const err = new Error({ status: 400, message: 'Some required fields are missing' });
        throw err;
    }

    const findUser = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'password', 'image'],
        where: { email },
    });

    const isMatch = bcrypt.compareSync(password, findUser.dataValues.password);
    console.log(isMatch);

    if (!findUser) {
        const err = new Error({ status: 400, message: 'Invalid fields' });
        throw err;
    }

    const token = generateJWTToken(findUser.dataValues);

    return { token };
};

module.exports = { authenticate };