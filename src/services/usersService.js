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

// const findUserByEmail = async ({ email }) => {
//    const findUser = await User.findOne({
//        attributes: ['id', 'displayName', 'email', 'password', 'image'],
//        where: { email },
//    });

//   if (!findUser) {

//   }

//    const carol = await createUsers(findUser.dataValues);

//    return carol;
// };

module.exports = { createUsers };
