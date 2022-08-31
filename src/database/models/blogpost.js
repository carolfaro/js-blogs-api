const createBlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });

  BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, { as: 'users', foreignKey: 'userId'})
  }

  return BlogPost;
}

module.exports = createBlogPost;