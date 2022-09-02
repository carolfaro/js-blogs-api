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

const getUserById = (id) => User.findOne({
   where: { id },
   attributes: { exclude: ['password'] },
   raw: true,
});

module.exports = { createUsers, getAllUsers, getUserById };
