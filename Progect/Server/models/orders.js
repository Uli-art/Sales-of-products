module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Date: {
          type: Sequelize.DATE,
        }
      });
    return Order;
}

