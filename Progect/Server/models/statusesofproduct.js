module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define("statusesofproducts", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          
        },
        
       Type: {
          type: Sequelize.STRING,
          unique: true,
        }
      });
    return Status;
}

