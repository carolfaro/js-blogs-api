const usersService = require('../services/usersService');
const authService = require('../services/authService');

const usersController = {

async createUsers(req, res, next) {
    const { displayName, email, password, image } = req.body;
    try {
        const create = await usersService.createUsers({
            displayName, 
            email, 
            password, 
            image,
        });
        if (create) {
            console.log(`AQUIII AAAAA ${create}`);
            const token = await authService.authenticate(create);
            if (!token) return res.status(409).json({ message: 'User already registered' });
            return res.status(201).json(token);
        }
    } catch (err) {
        next(err);
    }
},
};

module.exports = usersController;