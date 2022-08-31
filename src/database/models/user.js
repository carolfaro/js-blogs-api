const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });

  User.associate = (db) => {
    User.hasMany(db.BlogPost, { as: 'blogPosts', foreignKey: 'userId'})
  }

  return User;
}

module.exports = createUser;