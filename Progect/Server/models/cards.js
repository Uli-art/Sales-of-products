module.exports =  (sequelize, Sequelize) => {
    const Cards = sequelize.define("cards", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        UserId:{
            type: Sequelize.INTEGER
        }, 
        ProductId:{
            type: Sequelize.INTEGER
      }});
    return Cards;
  }