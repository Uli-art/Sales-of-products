module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Name: {
        type: Sequelize.STRING,
        unique: true,
      },
      WholesalePrice: {
        type: Sequelize.DOUBLE,
      },
      RetailPrice: {
        type: Sequelize.DOUBLE,
      },
      Image: {            
        type: Sequelize.STRING,
        unique: true,
      },
      Description: {
        type: Sequelize.STRING,
      },
    });
  return Product;
}