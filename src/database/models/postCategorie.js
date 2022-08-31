const createPostCategorie = (sequelize, DataTypes) => {
    const PostCategorie = sequelize.define('PostCategories', {},  { timestamps: false })

    PostCategorie.associate = (db) => {
        db.Categorie.belongsToMany(db.BlogPost, {
            as:'blogposts',
            through: PostCategorie,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        db.BlogPost.belongsToMany(db.Categorie, {
            as: 'categories',
            through: PostCategorie,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    }

    return PostCategorie;
}

module.exports = createPostCategorie;