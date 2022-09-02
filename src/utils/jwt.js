const jwt = require('jsonwebtoken');
require('dotenv').config();

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '365d',
    algorithm: 'HS256',
};

const generateJWTToken = ({ id, email }) => 
jwt.sign({ id, email }, TOKEN_SECRET, jwtConfig);

const verifyToken = (token) => {
    const verifyTokenUser = jwt.verify(token, TOKEN_SECRET);
    return verifyTokenUser;
};

const authenticateToken = async (token) => {
    if (!token) {
        const err = new Error({ status: 400, message: 'jwt malformed' });
        throw err;
    }

    try {
        const validate = await jwt.verify(token, TOKEN_SECRET);
        return validate;
    } catch (error) {
        const err = new Error({ status: 400, message: 'jwt malformed' });
        throw err;
    }
};

module.exports = {
    generateJWTToken,
    authenticateToken,
    verifyToken,
};