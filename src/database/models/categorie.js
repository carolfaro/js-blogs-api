const createCategorie = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  Categorie.associate = (db) => {
    Categorie.hasMany(db.PostCategorie, { as: 'postCategories', foreignKey: 'categoryId'})
  }

  return Categorie;
}

module.exports = createCategorie;