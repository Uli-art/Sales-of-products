module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define("statusesoforders", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        
       TypeOfStatus: {
          type: Sequelize.STRING,
        }
  
      });
    return Status;
}

