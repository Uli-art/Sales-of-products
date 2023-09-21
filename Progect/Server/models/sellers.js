module.exports =  (sequelize, Sequelize) => {
    const Seller = sequelize.define("sellers", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        NameOfCompany: {
          type: Sequelize.STRING,
        },
        Password: {
          type: Sequelize.STRING,
        },
        PhoneNumber: {
          type: Sequelize.STRING,
          unique: true,
        },
        Adress: {
          type: Sequelize.STRING,
        },
        Description: {
            type: Sequelize.STRING,
          },
      });

    return Seller;
}