module.exports =  (sequelize, Sequelize) => {
  const Categories = sequelize.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Type:{
        type: Sequelize.STRING,
        unique: true,
      }
    });
  return Categories;
}