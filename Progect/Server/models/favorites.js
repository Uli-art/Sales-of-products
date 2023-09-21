module.exports = (sequelize, Sequelize) => {
    const Favorites = sequelize.define("favorites", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        }
      });
    return Favorites;
  }