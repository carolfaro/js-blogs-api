const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false,
  });

  User.associate = (db) => {
    User.hasMany(db.BlogPost, { as: 'blogPosts', foreignKey: 'userId'})
  }

  return User;
}

module.exports = User;