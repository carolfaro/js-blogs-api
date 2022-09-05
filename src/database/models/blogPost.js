const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
  {
    tableName: 'BlogPosts',
    updatedAt: 'updated',
    createdAt: 'published',
  });

  BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, { as: 'users', foreignKey: 'userId'})
  }

  return BlogPost;
}

module.exports = BlogPost;