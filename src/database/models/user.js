const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.NUMBER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });

  return User;
}

module.exports = createUser;