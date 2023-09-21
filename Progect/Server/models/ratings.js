module.exports = (sequelize, Sequelize) => {
    const Ratings = sequelize.define("rating", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          
        },
        
       Rating: {
          type: Sequelize.DOUBLE,
        }
      });
    return Ratings;
}
