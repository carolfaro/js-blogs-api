const { User } = require('../database/models');

const createUsers = async ({ displayName, email, password, image }) => {
   const user = await User.create({
    displayName, 
    email, 
    password, 
    image,
   });
   return user;
};

const getAllUsers = () => User.findAll({
      attributes: { exclude: ['password'] },
   });

module.exports = { createUsers, getAllUsers };
