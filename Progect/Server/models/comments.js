module.exports =  (sequelize, Sequelize) => {
    const Categories = sequelize.define("comments", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Text: {
            type: Sequelize.STRING,
        },
        Date: {
            type: Sequelize.DATE,
        }
      });
    return Categories;
  }