const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true }
    },  
    { timestamps: false,  tableName: 'PostCategories' });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as:'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    }

    return PostCategory;
}

module.exports = PostCategory;

// const PostCategory = (sequelize, DataTypes) => {
//     const PostCategory = sequelize.define("PostCategory", {
//       postId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
//       categoryId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true }
//     },
//     {
//       timestamps: false,
//       tableName: 'PostCategories'
//     });
  
//     PostCategory.associate = (models) => {
//       models.BlogPost.belongsToMany(models.Category, {
//         as: 'categories',
//         through: PostCategory,
//         foreignKey: 'postId',
//         otherKey: 'categoryId',
//       });
//       models.Category.belongsToMany(models.BlogPost, {
//         as: 'posts',
//         through: PostCategory,
//         foreignKey: 'categoryId',
//         otherKey: 'postId',
//       });
//     };
  
//     return PostCategory;
//   };
  
//   module.exports = PostCategory;