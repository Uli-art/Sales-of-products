module.exports =  (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Name: {
          type: Sequelize.STRING,
        },
        Surname: {
          type: Sequelize.STRING,
        },
        Password: {
          type: Sequelize.STRING,
        },
        PhoneNumber: {
          type: Sequelize.STRING,
          unique: true,
        },
        Diskont: {
          type: Sequelize.INTEGER,
        }
      });

    return User;
}

